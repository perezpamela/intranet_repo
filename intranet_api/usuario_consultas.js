let config = require("./dbconfig");
//const sql = require("mssql");
const sql = require('mssql/msnodesqlv8'); 

let usuario_consultas = {
    getByEmail:  async function(email,resolve, reject){
       try{
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("SELECT * FROM usuarios where usuario_email='"+email+"'"); 
        resolve(usuarios.recordsets);

       } catch (err){
           reject(err);
       }

    },
    getByName: async function(nombre,resolve, reject){
        try{
            let pool = await sql.connect(config);
            let usuarios = await pool.request().query("SELECT * FROM usuarios where usuario_nombre='"+nombre+"'"); 
            resolve(usuarios.recordsets);

        }catch(error){
            reject(error);
        }
    }
}
module.exports = usuario_consultas;