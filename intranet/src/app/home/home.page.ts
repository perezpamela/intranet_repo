import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {UsuarioDatosService} from '../servicios/usuario-datos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  color:string='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'

  slideOpts = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  };


  constructor(
      	      private uService: UsuarioDatosService,
              private router: Router,
              public menu: MenuController,
              private _router: Router,

              ) { 
                this.uService.devolverColor(this.color)
                
  }
  
  ngOnInit() {
    this.menu.swipeGesture(true)
  }
  logout(){
    this.uService.logoutUser();
    this.router.navigate(['/home']);
  }

  tMenu(){
   
    this.menu.toggle();
    this.uService.refreshMenu();

  }



  formacion(){
    this._router.navigate(['/formacion']);
    this.menu.close()
  }
  normas(){
    this._router.navigate(['/normas']);
    this.menu.close()
  }
  logros(){
    this._router.navigate(['/logros']);
    this.menu.close()
  }
  beneficios(){
    this._router.navigate(['/beneficios']);
    this.menu.close()
  }
  referidos(){
    this._router.navigate(['/programa-referido']);
    this.menu.close()
  }
  estructura(){
    this._router.navigate(['/estructura-dicsys']);
    this.menu.close()
  }
  innovacion(){
    this._router.navigate(['/innovacion']);
    this.menu.close()
  }
  procesos(){
    this._router.navigate(['/procesos-org']);
    this.menu.close()
  }
  busquedasactivas(){
    this._router.navigate(['/busquedas-activas']);
    this.menu.close()
  }
  
  
  
  
  
  
  

}
