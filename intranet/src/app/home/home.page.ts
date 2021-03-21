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




  
  

}
