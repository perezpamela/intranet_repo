import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioDatosService } from './servicios/usuario-datos.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _UsuarioDatosService: UsuarioDatosService,//inyectamos los servicios..
    private _router: Router
    ) { }

    canActivate(): boolean {
      if (this._UsuarioDatosService.loggedIn()) {//la ruta del logged in en usuario-datos.services.ts
        //console.log('true - Si esta el token')
        return true
      } else {
        //console.log('false - No esta el token')            
        this._router.navigate(['/login'])
        return false
      }
    }
  

  
}
