import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {UsuarioDatosService} from '../../servicios/usuario-datos.service';

import { Router } from '@angular/router'

import { MenuController } from '@ionic/angular';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  usuario:string =localStorage.getItem('usuario');

  colorMenu:string



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private usuarioDatosService: UsuarioDatosService,
    private _router: Router,
    public menu: MenuController,

   
    
  ) {
    this.initializeApp();

  }

ngOnInit(){
  this.usuarioDatosService.refreshNeeded$
  .subscribe(()=>{
    this.usuario =localStorage.getItem('usuario');
    this.colorMenu=this.usuarioDatosService.mandarColor();

  
  })
}


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



 

  Logout(){
    this.usuarioDatosService.logoutUser();
  }

  Perfil(){
    this._router.navigate(['/perfil']);
    this.menu.close()

  }

  Clientes(){

    this._router.navigate(['/clientes']);
    this.menu.close()
  }

  Herramientas(){

    this._router.navigate(['/herramientas']);
    this.menu.close()
  }

  DatosUtiles(){
   
    this._router.navigate(['/datos-utiles']);
    this.menu.close()
  }

  Novedades(){
    
    this._router.navigate(['/novedades']);
    this.menu.close()

  }

  redesSociales(){
   
    this._router.navigate(['/redes-sociales']);//redirigirlo a la pagina de redes sociales!
    this.usuarioDatosService.refreshMenu();
    this.menu.close()
  }

  acercaDe(){
    this._router.navigate(['/acerca-de']);
    this.menu.close()
  }


}