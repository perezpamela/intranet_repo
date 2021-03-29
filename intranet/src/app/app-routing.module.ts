import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';//importamos de la carpeta auth.guard...no se donde esta en mi front

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
    
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'herramientas',
    loadChildren: () => import('./herramientas/herramientas.module').then( m => m.HerramientasPageModule)
  },
  {
    path: 'novedades',
    loadChildren: () => import('./novedades/novedades.module').then( m => m.NovedadesPageModule)
  },
  {
    path: 'datos-utiles',
    loadChildren: () => import('./datos-utiles/datos-utiles.module').then( m => m.DatosUtilesPageModule)
  },
  {
    path: 'redes-sociales',
    loadChildren: () => import('./redes-sociales/redes-sociales.module').then( m => m.RedesSocialesPageModule)
  },  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./formacion/formacion.module').then( m => m.FormacionPageModule)
  },
  {
    path: 'normas',
    loadChildren: () => import('./normas/normas.module').then( m => m.NormasPageModule)
  },
  {
    path: 'logros',
    loadChildren: () => import('./logros/logros.module').then( m => m.LogrosPageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'programa-referido',
    loadChildren: () => import('./programa-referido/programa-referido.module').then( m => m.ProgramaReferidoPageModule)
  },
  {
    path: 'estructura-dicsys',
    loadChildren: () => import('./estructura-dicsys/estructura-dicsys.module').then( m => m.EstructuraDicsysPageModule)
  },
  {
    path: 'innovacion',
    loadChildren: () => import('./innovacion/innovacion.module').then( m => m.InnovacionPageModule)
  },
  {
    path: 'procesos-org',
    loadChildren: () => import('./procesos-org/procesos-org.module').then( m => m.ProcesosOrgPageModule)
  },



  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
