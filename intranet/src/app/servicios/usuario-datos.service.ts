import { Injectable } from '@angular/core';
//import {IUsuario} from '../interfaces/IUsuario';
//import {IError} from ... 
import {HttpClient} from '@angular/common/http';

import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UsuarioDatosService {

  constructor(
    private http: HttpClient,
    private _router: Router
  ) { }





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
    
    return this.http.post<any>('http://localhost:5000/api/usuarios/email', loginUserData)
    
  }


  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
  

  loggedIn() {
    
    return !!localStorage.getItem('token')//da true si esta, false si no esta el token
    
  }


}
