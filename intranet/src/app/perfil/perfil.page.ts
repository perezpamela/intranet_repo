import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  comentarios;
  //info:string;

  constructor(
    private usuarioDatosService: UsuarioDatosService,
    public actionSheetController: ActionSheetController,//inyectamos para usar action sheet
    private _router: Router,
    private alertControl: AlertController
    ) { }

  ngOnInit(
    ) {    
      this.cargar();
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
        this._router.navigate(['/logout']);//OJO!AGREGAR AQUI LA RUTA DEL EDITAR PERFIIIIIIL
      }
    }, {  
      text: 'Ver Privacidad',
      icon: 'lock-closed-outline',
      handler: () => {
        this._router.navigate(['/logout']);//RUTA DE PRIVACIDADDDDDD
      }
    }, ]
  });
  await actionSheet.present();
}




cargar(){
  var us=localStorage.getItem('usuario').toUpperCase();
  document.getElementById('nombreUsuarioLbl').innerHTML = us;

  this.usuarioDatosService.traerComentarios(us).subscribe(u => {//us=desa1
    let res= u["data"];
    //console.log("res= "+res)
    
    
    let num=Object.keys(res).length;
    var band=0;
    let com=new Array(num-1);
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
        band++
      }
   }
   

    this.comentarios = com;

  })
};


volverInicio(){
  this._router.navigate(['/logout']);//OJO!AGREGAR AQUI LA RUTA DEL EDITAR PERFIIIIIIL
}



}