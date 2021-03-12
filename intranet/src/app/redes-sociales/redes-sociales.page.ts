import { Component, OnInit,AfterViewInit} from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.page.html',
  styleUrls: ['./redes-sociales.page.scss'],
})
export class RedesSocialesPage implements OnInit,AfterViewInit {

  constructor(private _router: Router) { }

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

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }

}
