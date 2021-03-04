import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(  private _router: Router,) { }

  ngOnInit() {
  }


  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
  }

}
