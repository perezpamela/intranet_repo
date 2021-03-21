import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  color:string='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'

  constructor(  private _router: Router,
    public menu: MenuController,
    private uService: UsuarioDatosService,
    ) { 
      this.uService.devolverColor(this.color)
    }

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

tMenu(){
  this.menu.toggle();
  this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
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
