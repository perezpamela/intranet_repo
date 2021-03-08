import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
  
})
export class HerramientasPage implements OnInit {
  
  constructor(private content: IonContent) { }

  ngOnInit() {
  }
  gestionOffSet:any;
  administrativasOffSet:any;
  publicasOffSet:any;
  ionViewDidEnter(){
    //this.gestionOffSet=document.getElementById('h-gestion').offsetTop;
    //this.administrativasOffSet=document.getElementById('h-administrativas').offsetTop;
    //this.publicasOffSet=document.getElementById('h-publicas').offsetTop;
  }
  
  /*
  scrollToGestion() { 
    this.content.scrollToPoint(0, this.gestionOffSet); 
  }
  scrollToAdministrativas() { 
    this.content.scrollToPoint(0, this.administrativasOffSet); 
  }
  scrollToPublicas() { 
    this.content.scrollToPoint(0, this.publicasOffSet); 
  } */
    
      
    
    
    
}

