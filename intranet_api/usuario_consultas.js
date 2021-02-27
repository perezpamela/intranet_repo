let pool = require("./dbconfig");
const mysql = require('mysql');


let usuario_consultas = {


    getByEmail:  async function(email,dato,resolve, reject){

        
        if(dato==1)//si dato->0 =mail si dato->1=user
        { tipoDato='user_login' }
           else { tipoDato='user_email' }
    
        try{
            pool.query("SELECT * FROM wp_users WHERE "+tipoDato+" = '"+email+"'",(err, data) => {
            if(err) {
                console.error(err);
                return;
            }else{
            var string=JSON.stringify(data);
            var usuario =  JSON.parse(string);
            resolve(string);
        }
        });
        } catch (err){
            reject(err);
        }
     },

     
      getComById: async function(id,resolve, reject){
        try{
            pool.query("(SELECT wp_comments.comment_id,wp_comments.comment_content, wp_comments.comment_type FROM wp_comments INNER JOIN wp_users ON wp_users.id=wp_comments.user_id  WHERE (wp_users.user_login LIKE '"+id+"' OR wp_users.user_email LIKE '"+id+"') AND (wp_comments.comment_approved =1) AND (wp_comments.comment_type not LIKE 'Informacion')) UNION (SELECT c.comment_id,c.comment_content, c.comment_type FROM wp_comments c INNER JOIN wp_users u ON u.id=c.user_id WHERE (u.user_login LIKE '"+id+"' OR u.user_email LIKE '"+id+"' ) AND (c.comment_approved =1) AND (c.comment_type LIKE 'Informacion') ORDER BY comment_id desc LIMIT 1);" ,(err, data) => {
            if(err) {
                console.error(err);
                return;
            }
            var string = JSON.stringify(data);
            var comentario = JSON.parse(string);
            resolve(comentario);
        });
        } catch (err){
            reject(err);
        }
    },
    

    /* getByName: async function(nombre,resolve, reject){
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
    },*/

/*
    putInformacion: async function(userData, reject){
        try{
            pool.query("UPDATE wp_comments SET comment_content='"+userData.informacion+"' WHERE comment_type='Informacion' and user_id =( SELECT id FROM wp_users WHERE user_login='"+userData.usuario+"' OR user_email='"+userData.usuario+"')")
        } catch (err){
            reject(err);
        }
    },
*/


    
    



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