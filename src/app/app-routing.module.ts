import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadImageComponent } from './load/load-image/load-image.component';

const routes: Routes = [
  {path:"", component : LoadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
