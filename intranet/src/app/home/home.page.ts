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
  slideOpts = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  };

  usuario = localStorage.getItem('usuario');
  constructor(private menuCtrl: MenuController,
      	      private uService: UsuarioDatosService,
              private router: Router) { 
  }
  
  ngOnInit() {
    
  }
  logout(){
    this.uService.logoutUser();
    this.router.navigate(['/home']);
  }
  



}
