let tablaUsuario = require("./usuario_consultas");
let express = require('express');
let cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use('/api', router);

router.get('/usuarios/email/:email', function(req, res, next){
    tablaUsuario.getByEmail(req.params.email,
    function(datos){

        if(datos){
            res.status(200).json({
                datos
            });
        } else{
            res.status(404).json({
                "status":404,
                "statusText":"NOT_FOUND",
                "error": "El email '"+req.params.email+"' no está registrado en nuestra base de datos."
            });
        }   
    }, 
    function(err){next(err)});
});

router.get('/usuarios/nombre/:nombre', function(req, res, next){
    tablaUsuario.getByName(req.params.nombre, function(datos){

        if(datos){
            res.status(200).json({
                /*
                "status":200,
                "statusText":"OK",
                "data": */
                datos
            });
        } else{
            res.status(404).json({
                "status":404,
                "statusText":"NOT_FOUND",
                "error": "El usuario '"+req.params.nombre+"' no está registrado en nuestra base de datos."
            });
        }
    
    }, function(err){
        next(err);});
});

let port = process.env.port || 5000;

app.listen(port, function(){console.log("Node Server is running on http://localhost:"+port)});