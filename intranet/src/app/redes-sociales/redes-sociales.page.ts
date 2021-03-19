import { Component, OnInit,AfterViewInit} from '@angular/core';

import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.page.html',
  styleUrls: ['./redes-sociales.page.scss'],
})
export class RedesSocialesPage implements OnInit,AfterViewInit {

  constructor(private _router: Router,
    public menu: MenuController,) { }

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
  } 


  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }
 

}
