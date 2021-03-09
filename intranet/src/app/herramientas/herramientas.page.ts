import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
  
})
export class HerramientasPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;  
  

  ngOnInit() {
  }
  gestion:any = null;
  administrativas:any = null;
  publicas:any = null;
  ionViewDidEnter(){
    
    this.gestion = document.getElementById('h-gestion').offsetTop;
    this.administrativas = document.getElementById('h-administrativas').offsetTop;
    this.publicas = document.getElementById('h-publicas').offsetTop;
    
  }
  
 
  ScrollToPoint(x:string) {  
    if(x=='h-gestion'){
      this.content.scrollToPoint(0, this.gestion, 1500);  
    } 
    if(x=='h-administrativas'){
      this.content.scrollToPoint(0, this.administrativas, 1500);
    }
    if(x=='h-publicas'){
      this.content.scrollToPoint(0, this.publicas, 1500);
    }
    
    
  }  
    
    
    
    
}

