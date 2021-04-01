import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-procesos-org',
  templateUrl: './procesos-org.page.html',
  styleUrls: ['./procesos-org.page.scss'],
})
export class ProcesosOrgPage implements OnInit {
  color:string='background:linear-gradient(90deg,#53AF32 0%, #387823 100%);'
  
  imagen="https://media.glassdoor.com/sql/2610962/dicsys-squarelogo-1566572714845.png"

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