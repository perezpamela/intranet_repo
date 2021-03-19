import { Component, OnInit } from '@angular/core';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';
import { MenuController } from '@ionic/angular';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//interfa

  mail:string; 
  pass:string;
  //nombre:string;
  //email:string;
  //password: string;
  //estado: number; 
 // loginUserData = {}//el email y la password del input


  constructor(
    private usuarioDatosService: UsuarioDatosService,
    public menu: MenuController,
    private _router: Router
  ) { 
    this.menu.swipeGesture(false)
  }

   

  ngOnInit() {
    localStorage.removeItem('token')//remover cualquier rastro de un token
    localStorage.removeItem('usuario')//remover cualquier rastro de un token
  }

  /*CheckeoPass(pass:string, input:string){
    return pass===input;
  };*/

  Login(){

    let loginUserData = {mail:this.mail,pass:this.pass}//el email y la password del input 

    //if(usuario.includes('@')){
      this.usuarioDatosService.login(loginUserData)//le paso una data (el usuario y contraseña) para que este pase esa data al http de la api
      .subscribe(// EL SUBSCRIBEpide una respuesta o error:
        res => {// LA respuesta del backend puede ser ERROR o el TOKEN//*u =>* {//le paso el mail y la password

        /*let res= u["datos"];
        this.nombre = res["usuario_nombre"];
        this.email = res["usuario_email"];
        this.password = res["usuario_password"];
        this.estado = res["usuario_estado"];
        if(this.estado==1){
        if(this.CheckeoPass(this.i_pass,this.password)){
          //llevarlo al dashboard
          alert("Se logeó");
        }else{
          //mensaje de error
          alert("No se logeó");
        }
      } else{
        alert("Ese usuario está borrado.")
      }*/
      alert("Contraseña ok ");
      localStorage.setItem('token', res.token) // T lallave es el npmbre 'token', el otro valor es el TOKEN que devuelve la api
      localStorage.setItem('usuario',this.mail )
       // this._router.navigate(['/special'])//SOLO ES LA NAVEGACION A LA PAGINA DE INICIO
      // var asd=localStorage.getItem('token');
     
      this._router.navigate(['/home']);

      },
      err => {
        //console.log(err)
        alert(err.error.text);
      }
    )
   // }
   /* else{
      this.usuarioDatosService.getUsuarioByNombre(usuario).subscribe(u => {
        let res= u["datos"];
        this.nombre = res["usuario_nombre"];
        this.email = res["usuario_email"];
        this.password = res["usuario_password"];
        
        if(this.CheckeoPass(this.i_pass,this.password)){
          //llevarlo al dashboard
          alert("Se logeó");
        }else{
          //mensaje de error
          alert("No se logeó");
        }
      
      });
    }*/
  };

}