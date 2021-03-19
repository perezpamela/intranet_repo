import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(  private _router: Router,
    public menu: MenuController,
    ) { }

  ngOnInit() {
  }

/*
  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }*/

  counter(i: number) {
    return new Array(i);
}

slideOpts = {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
};

volverInicio(){
  this._router.navigate(['/home']);//vuelve a home
}

tMenu(){
   
  this.menu.toggle();
}

}
