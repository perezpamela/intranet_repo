import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-rec-humanos',
  templateUrl: './rec-humanos.page.html',
  styleUrls: ['./rec-humanos.page.scss'],
})
export class RecHumanosPage implements OnInit {
  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'

  constructor(    private _router: Router,
    private usuarioDatosService: UsuarioDatosService,) { }

  ngOnInit() {
  }
  
  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.usuarioDatosService.devolverColor(this.color)
    this.usuarioDatosService.refreshMenu();
  }

}
