import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

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
  
  constructor(private menuCtrl: MenuController) { 
    
  }
  
  ngOnInit() {
  }

  

}
