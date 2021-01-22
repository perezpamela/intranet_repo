import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UsuarioDatosService} from '../servicios/usuario-datos.service';
import {IUsuario} from '../interfaces/IUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:IUsuario;
  i_usuario:string;
  i_pass:string;
  i_mantener_sesion:boolean;
  error_password:string;
  
  
  constructor(
    private usuarioDatosService: UsuarioDatosService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  VerficicaPass(pass:string, input:string){
    return pass===input;
  };

  Login(usuario:string){
    if(usuario.includes('@')){                  //Si ingresó un email ----->
      this.usuarioDatosService.getUsuarioByEmail(usuario).subscribe(u => {
        this.usuario=u;
        if(this.usuario!==null && this.usuario.usuario_estado!==0){
            if(this.VerficicaPass(this.i_pass, this.usuario.usuario_password)){
              this.error_password="";
              this.router.navigateByUrl('home');
            } else{
              this.error_password="Los datos ingresados son incorrectos."
            }
        } else{
          this.error_password="El email no pertenece a un usuario registrado o activo.";
        } 
      });  
                                            //Si ingresó un nombre de usuario ----->
    }else{ 
        this.usuarioDatosService.getUsuarioByNombre(usuario).subscribe(u => {
          this.usuario = u; 
          if(this.usuario!==null && this.usuario.usuario_estado!==0){
            if(this.VerficicaPass(this.i_pass, this.usuario.usuario_password)){
              this.error_password="";
              this.router.navigateByUrl('home');
            } else{
              this.error_password="Los datos ingresados son incorrectos."
            }
          } else{
            this.error_password="El email no pertenece a un usuario registrado o activo.";
          }
      });
    }   
  }

}
