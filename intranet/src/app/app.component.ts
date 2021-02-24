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

  usuario:string = localStorage.getItem('usuario');

}
