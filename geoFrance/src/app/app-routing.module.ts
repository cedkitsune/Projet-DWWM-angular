import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommuneComponent } from './components/commune/commune.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'commune',component:CommuneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
