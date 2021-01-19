import { Injectable } from '@angular/core';
import {IUsuario} from '../interfaces/IUsuario';
//import {IError} from ... 
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioDatosService {

  constructor(
    private http: HttpClient
  ) { }

  //path ="http://localhost:5000";
  getUsuarioByNombre(nombre: string){
    const path = `http://localhost:5000/api/usuarios/nombre/${nombre}`; 

    //if - 
    return this.http.get<IUsuario>(path);
    
  }

  getUsuarioByEmail(email: string){
    const path = `http://localhost:5000/api/usuarios/email/${email}`; 
    return this.http.get<IUsuario>(path);
    
  }
}
