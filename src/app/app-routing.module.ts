import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"galeria", component:GaleriaComponent},
  {path:"detalle/:id", component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
