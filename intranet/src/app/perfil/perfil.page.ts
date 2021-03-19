import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  comentarios;
  //info:string;
  colorElegido;
  contador:number=0;

  
  colores: Array<{codigo: string}> = 
  [
  {codigo:'background:rgba(0, 117, 190, 0.5);--bullet-background: #0075BE; --bullet-background-active: #53AF32;'},

  {codigo:'background:rgba(255, 204, 0, 0.5);'},

  {codigo:'background:rgba(233, 78, 15, 0.5);'},

  {codigo:'background:rgba(91, 197, 242, 0.5)'},
  
  {codigo:'background:rgba(83, 175, 50, 0.5);'},

  {codigo:'background:rgba(247, 167, 0, 0.5);'}
  ];
  
 

  constructor(
    private usuarioDatosService: UsuarioDatosService,
    public actionSheetController: ActionSheetController,//inyectamos para usar action sheet
    private _router: Router,
    public menu: MenuController,
    //private alertControl: AlertController
    ) { console.log("ggggggggggggggggggggggggggggggg")}

  ngOnInit(
    ) {    
      this.cargar();
      this.menu.swipeGesture(false)
  }


  
/////public onButtonClick() {  this.buttonClicked = !this.buttonClicked;}////////////////////////////////////////////////////////////////////////

/*public PromptDemo() {//VENTANA EMERGENTE
  var a=document.getElementById('infoLbl').innerHTML;
  //Ingresamos un mensaje a mostrar
  var info = prompt("Informacion");
  //Detectamos si el usuario ingreso un valor
  if (info = null){
    document.getElementById('infoLbl').innerHTML = a;
  } else {
    document.getElementById('infoLbl').innerHTML = info;
    this.usuarioDatosService.actualizarInformacionUsuario(info);
  }
  }*/


  //info
  /*
  async infoAlerta(){

    await this.alertControl.create({
      header:"Informacion:",
      //subHeader: no necesito por ahora,
      //message: Tampoco...
      inputs:[
        { type: 'text', name: 'inf',}
      ],
      buttons:[
        { text: "aceptar", handler:(res)=>{
          document.getElementById('infoLbl').innerHTML = res.inf;

          var info = {
            usuario: localStorage.getItem('usuario'),
            informacion: res.inf
        }
          this.usuarioDatosService.actualizarInformacionUsuario(info);
        }
      },
      {
        text: "cancelar"
      }
      ]
    }).then(res=> res.present())


  }*/


/*
  public PromptDemo() {
    var a=document.getElementById('infoLbl').innerHTML;
    console.log(a)
    //Ingresamos un mensaje a mostrar
    var info = prompt("¿Cuál es tu mascota favorita?", "");
    //Detectamos si el usuario ingreso un valor
    if (info != null){
      document.getElementById('infoLbl').innerHTML = info;
    } else {
      document.getElementById('infoLbl').innerHTML = a;
    }
    }*/
  



async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({//AWAIT espera hasta que se cree el action sheet y lo que regresa recien lo almacena en "const actionSheet"
    cssClass: 'my-custom-class',
    buttons: [{
      text: 'Editar Perfil',
      icon: 'person-outline',
      handler: () => {//la funcion se dispara cuando cliqueamos
        this._router.navigate(['/home']);//OJO!AGREGAR AQUI LA RUTA DEL EDITAR PERFIIIIIIL
      }
    }, {  
      text: 'Ver Privacidad',
      icon: 'lock-closed-outline',
      handler: () => {
        this._router.navigate(['/home']);//RUTA DE PRIVACIDADDDDDD
      }
    }, ]
  });
  await actionSheet.present();
}




cargar(){
  var us=localStorage.getItem('usuario').toUpperCase();
  document.getElementById('nombreUsuarioLbl').innerHTML = us;

  this.usuarioDatosService.traerComentarios(us).subscribe(u => {//us=desa1 localStorage
    let res= u["data"];
    //console.log("res= "+res)
    let com;
    let col;
    
    let num=Object.keys(res).length;
    
    if(num>=1){
    var band=0;
    com=new Array(num-1);
    col=new Array(num-1);
    var info;
    //var string = JSON.stringify(u);
    //console.log("stringu= "+string)
    //var comentario = JSON.parse(string);
    //console.log("comentario= "+comentario.comment_content)

    for (var i = 0 ; i< num ; i++) {
      if(res[i].comment_type=='Informacion'){
        info = res[i].comment_content;
        document.getElementById('infoLbl').innerHTML = info;
      }
      else{
        com[band]=res[i];

        if(this.contador==6){
          this.contador=0
        }
        
        col[band]=this.colores[this.contador];
        band++;
        this.contador++;
      }
    }

    if(band==0){
      this.comentarios = [{comment_content:"Sin comentarios"}];
    }
    else{
      this.comentarios = com;
      this.colorElegido = col;
    }
    }
    else{
      this.comentarios = [{comment_content:"Sin comentarios"}];
    }

    
    
  })

  
};


volverInicio(){
  this._router.navigate(['/home']);//vuelve a home
}



}