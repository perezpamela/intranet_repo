import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor(private _router: Router,
    public menu: MenuController,) { }

  ngOnInit() {
  }


  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }

  tMenu(){
   
    this.menu.toggle();
  }

}
