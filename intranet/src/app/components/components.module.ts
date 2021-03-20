import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,MenuComponent,FooterComponent
  ],

  exports:[
    HeaderComponent,MenuComponent,FooterComponent
  ], //PARA USARLO EN OTRAS PAGINAS

  imports: [
    CommonModule,IonicModule
  ]//importo ionicModule para usar ELEMENTOS de ionicModule
})
export class ComponentsModule { }
