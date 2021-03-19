import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,MenuComponent
  ],

  exports:[
    HeaderComponent,MenuComponent
  ], //PARA USARLO EN OTRAS PAGINAS

  imports: [
    CommonModule,IonicModule
  ]//importo ionicModule para usar ELEMENTOS de ionicModule
})
export class ComponentsModule { }
