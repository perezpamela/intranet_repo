import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular';
import { UsuarioDatosService } from '../servicios/usuario-datos.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
  
})
export class HerramientasPage implements OnInit {

  color:string='background:linear-gradient(90deg,#FFF000 0%, #A99F00 100%);'


  @ViewChild(IonContent, {static: false}) content: IonContent;  

  constructor(  private _router: Router,
    public menu: MenuController,
    private uService: UsuarioDatosService,
    ) { 
      this.uService.devolverColor(this.color)
    }

  ngOnInit() {

  }
  

  volverInicio(){
    this._router.navigate(['/home']);//vuelve a home
    this.color='background:linear-gradient(90deg,#0075BE 0%, #004D7E 100%);'
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  }
  
 
  tMenu(){
    this.menu.toggle();
    this.uService.devolverColor(this.color)
    this.uService.refreshMenu();
  }
    
    
  
    
}

