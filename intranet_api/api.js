var express = require('express')
var bodyParser = require('body-parser')
let tablaUsuario = require("./usuario_consultas");
let cors = require('cors');
const jwt = require('jsonwebtoken');//token

var app = express()
const router = express.Router();

var jsonParser = bodyParser.json()//par
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use('/api', router);


router.post('/usuarios/email',jsonParser, function (req, res)  {
    let userData = req.body//req.body:  lo que mandamos del front lo ponemos en userData
    let band=1
    if(userData.mail.includes('@')){ 
        band=0
    }

    tablaUsuario.getByEmail(userData.mail,band,
        function(datos){
            
            var usuario=JSON.parse(datos);

                if (usuario.length==0) {//si no encuentra datos
                res.status(401).send('Invalid Email')
                } else 
                if (usuario[0]["user_status"]==1) {//1=bloqueado
                    res.status(401).send('Usuario bloqueado')
                } else 
                if ( usuario[0]["user_pass"] !== userData.pass) {
                    res.status(401).send('Invalid Password')
                } else {
                    //console.log("hacemos el tokennnn..."); 
                    let payload = {subject: usuario[0]["user_login"]}//para el token
                    let token = jwt.sign(payload, 'secretKey')//para el token
                    res.status(200).json({
                        token//en vez de enviar dato aqui mandariamos el token :3
                    });
                }
        }, 
        function(err){
            console.log("error"+err)  
        });
    });



/*router.get('/usuarios/nombre/:nombre', function(req, res, next){
    tablaUsuario.getByName(req.params.nombre, function(datos){

        if(datos){
            res.status(200).json({
                "status":200,
                "statusText":"OK",
                "data": 
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
});*/

let port = process.env.port || 5000;

app.listen(port, function(){console.log("Node Server is running on http://localhost:"+port)});

