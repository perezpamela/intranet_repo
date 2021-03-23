import { Injectable } from '@angular/core';
//import {IUsuario} from '../interfaces/IUsuario';
//import {IError} from ... 
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router'

import { IComentario } from '../interfaces/IComentairo.interface';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioDatosService {

  colorMenu:string

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }

//subject crea un nuevo observable que del que podemos emitir valores
  private _refreshNeeded$ = new Subject<void>()//de este observable del que podemos ouput content__
  //                                        Necesitamos momentaneamente esto si alguien se subscrive le dejamos saber a este componente particular
//                                          de que algo esta pasando___y que algo puede tener datos___
//                                    cada vez que s enotifica la subscripcion se activa y hace algo
  get refreshNeeded$(){//ahora tenemos una funcion que llama al subject para reload..
    return this._refreshNeeded$;
  }

  //path ="http://localhost:5000";
 /* getUsuarioByNombre(nombre: string){
    const path = `http://localhost:5000/api/usuarios/nombre/${nombre}`; 

    //if - 
    return this.http.get<IUsuario>(path);
    
  }*/

 /* getUsuarioByEmail(loginUserData){
    const path = `http://localhost:5000/api/usuarios/email/${loginUserData}`; 
    return this.http.get<IUsuario>(path);
    
  }*/

  login(loginUserData) {
    
    return this.http
      .post<any>('http://localhost:5000/api/usuarios/email', loginUserData)
     
    
  }


  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  

  loggedIn() {
    
    return !!localStorage.getItem('token')//da true si esta, false si no esta el token
    
    
    
  }


  traerComentarios(loginUserData){//le paso el usuario
    const path = `http://localhost:5000/api/usuarios/comentario/${loginUserData}`; //loginUserData= desa1)
    return this.http.get<IComentario >(path);
  }

  refreshMenu(){
    this._refreshNeeded$.next();
  }

  devolverColor(datos){
    this.colorMenu=datos;
  }

  mandarColor(){
    return this.colorMenu

  }


}
