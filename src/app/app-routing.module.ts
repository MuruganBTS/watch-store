import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { Product } from './components/product/product.component';
const routes: Routes = [{
  path:'', component:Home},{
  path:'product/:id', component:Product
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
