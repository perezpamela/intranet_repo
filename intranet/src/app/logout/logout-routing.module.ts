import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPage } from './logout.page';

//FALTAN CARGAR LOS PATH
const routes: Routes = [
  {
    path: '',
    component: LogoutPage,
    children:[
      {
        path:'Inicio',
        //loadChildren: './logout/logout.module#LogoutPageModule' AGREGAR LA RUTA A INICIO
      },
      {
        path:'Configuracion',
        
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutPageRoutingModule {}



