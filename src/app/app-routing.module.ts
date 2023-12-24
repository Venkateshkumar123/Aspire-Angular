import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './addtocart/addtocart.component';

const routes: Routes = [
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'addtocart',component:AddtocartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
