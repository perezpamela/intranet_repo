let config = require("./dbconfig");
//const sql = require("mssql");
const sql = require('mssql/msnodesqlv8'); 

let usuario_consultas = {
    getByEmail:  async function(email,resolve, reject){
       try{
        let pool = await sql.connect(config);
        let usuario =  await pool.request().query("SELECT * FROM usuarios where usuario_email='"+email+"'");
        //let usuario = JSON.parse(usuarios).find(u => u.email == email)
        resolve(usuario.recordset[0]);

       } catch (err){
           reject(err);
       }

    },
    getByName: async function(nombre,resolve, reject){
        try{
            let pool = await sql.connect(config);
            let usuario = await pool.request().query("SELECT * FROM usuarios where usuario_nombre='"+nombre+"'"); 
            resolve(usuario.recordset[0]);

        }catch(error){
            reject(error);
        }
    }
}
module.exports = usuario_consultas;