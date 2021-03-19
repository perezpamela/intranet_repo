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


  constructor(
      	      private uService: UsuarioDatosService,
              private router: Router,
              public menu: MenuController,

              ) { 
              
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
  }
  

}
