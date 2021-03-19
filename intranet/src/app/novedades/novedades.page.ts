import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  constructor(  private _router: Router,
    public menu: MenuController,
    ) { }

  ngOnInit() {
  }

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }

  tMenu(){
   
    this.menu.toggle();
  }

}
