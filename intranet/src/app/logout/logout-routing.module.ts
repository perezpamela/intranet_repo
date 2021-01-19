import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutPage } from './logout.page';

//FALTAN CARGAR LOS PATH
const routes: Routes = [
  {
    path: '',
    component: LogoutPage,


    children: [
      {
        path: 'Inicio',
        children: [
          {
            path: '',
           // loadChildren: '../Inicio/Inicio.module#InicioModule'
          }
        ]
      },
      {
        path: '',
        //redirectTo: '/app/tabs/Inicio',
        pathMatch: 'full'
      }
    ]


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutPageRoutingModule {}



