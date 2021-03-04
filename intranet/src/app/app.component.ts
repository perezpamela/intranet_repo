import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {UsuarioDatosService} from './servicios/usuario-datos.service';

import { Router } from '@angular/router'

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
    this._router.navigate(['/home']);//redirigirlo a la pagina de redes sociales!
    this.menu.close()
  }

  usuario:string = localStorage.getItem('usuario');

}
