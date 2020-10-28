import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { PaisComponent } from './core/pais/pais.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'country/:id', component: PaisComponent },
  { path: '**', pathMatch: 'full' ,redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
