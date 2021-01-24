var mysql=require('mysql');

const pool = mysql.createPool({
  connectionLimit : 100, //importante
  host: '127.0.0.1',
  database: 'intranet',//nombre de la base de datos (la que cree yo)
  user: 'root',
  password: '1234'
});

module.exports = pool;





/*const config = {
    database:'IntranetDB',  
    server: 'localhost\\SQLEXPRESS',
    driver: 'msnodesqlv8',
    options: {
      trustedConnection: true,
      enableArithAbort: true
    }
  }
  
  
  module.exports = config;

  /* Datos de prueba para crear la bd. (Sql Server)


  create database IntranetDB;

  create table usuarios(
    usuarioID int identity(1,1) primary key,
    usuario_nombre varchar(50),
    usuario_email varchar(100),
    usuario_password varchar(50),
    usuario_estado int
  );

  insert into usuarios values ('Fran', 'fran012@hotmail.com', 'asD123444!', 1);
  insert into usuarios values ('Pamela', 'p023@outlook.com', '123ABCdefbg', 1);
  insert into usuarios values ('Florencia123', 'fran012@gmail.com', 'contraseñañaña', 1);
  insert into usuarios values ('juanPerez', 'jp2001@gmail.com', 'U_712asbc!', 0);
  insert into usuarios values ('Pepe', 'pepe@hotmail.com', 'helloWorld2004_23', 1);
  */