import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesSofPage } from './des-sof.page';

const routes: Routes = [
  {
    path: '',
    component: DesSofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesSofPageRoutingModule {}
