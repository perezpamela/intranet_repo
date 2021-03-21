import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'

  constructor(  private _router: Router,
    public menu: MenuController,
    private uService: UsuarioDatosService,
    ) {
      this.uService.devolverColor(this.color)
     }

  ngOnInit() {
  }

  tMenu(){
    this.menu.toggle();
    this.color='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'
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
