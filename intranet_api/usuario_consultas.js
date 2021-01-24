let pool = require("./dbconfig");
const mysql = require('mysql');


let usuario_consultas = {


    getByEmail:  async function(email,resolve, reject){
        try{
            pool.query("SELECT * FROM wp_users where user_email='"+email+"'",(err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            var string=JSON.stringify(data);
            var usuario =  JSON.parse(string);
            resolve(usuario);
        });
        } catch (err){
            reject(err);
        }
     },

     getByName: async function(nombre,resolve, reject){
        try{
            pool.query("SELECT * FROM wp_users where user_login='"+nombre+"'",(err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            var string=JSON.stringify(data);
            var usuario =  JSON.parse(string);
            resolve(usuario);
        });
        } catch (err){
            reject(err);
        }
    },


}
module.exports = usuario_consultas;



/*let config = require("./dbconfig");
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
module.exports = usuario_consultas;*/