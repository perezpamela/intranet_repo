import { Component, OnInit,AfterViewInit} from '@angular/core';

import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.page.html',
  styleUrls: ['./redes-sociales.page.scss'],
})
export class RedesSocialesPage implements OnInit,AfterViewInit {

  color:string='background:linear-gradient(90deg,#E94E0F 0%, #9A340A 100%);'
//5BC5F2
  constructor(private _router: Router,
    public menu: MenuController,
    private uService: UsuarioDatosService,) { 
      this.uService.devolverColor(this.color)
    }

  ngOnInit() {
  }

  ngAfterViewInit() {

    // Tweets
    let ngJs: any;
    const ngFjs = document.getElementsByTagName('script')[0];
    const ngP = 'https';

    if (!document.getElementById('twitter-wjs')) {
      ngJs = document.createElement('script');
      ngJs.id = 'twitter-wjs';
      ngJs.src = ngP + '://platform.twitter.com/widgets.js';
      ngFjs.parentNode.insertBefore(ngJs, ngFjs);

    }
  }


  tMenu(){
    this.menu.toggle();
    this.color='background:linear-gradient(90deg,#E94E0F 0%, #9A340A 100%);'
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  } 


  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  }

 

}
