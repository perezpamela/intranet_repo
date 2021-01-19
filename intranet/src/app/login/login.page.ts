import { Component, OnInit } from '@angular/core';
import {UsuarioDatosService} from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string; 
  nombre:string;
  email:string;
  password: string;
  i_pass:string;
  estado: number; 
  


  constructor(
    private usuarioDatosService: UsuarioDatosService
  ) { }

  ngOnInit() {
  }

  CheckeoPass(pass:string, input:string){
    return pass===input;
  };

  Login(usuario:string){
    if(usuario.includes('@')){
      this.usuarioDatosService.getUsuarioByEmail(usuario).subscribe(u => {
        let res= u["datos"];
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
      }

      });  
    }
    else{
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
    }
  }

}
