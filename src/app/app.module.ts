import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component'
import { Product } from './components/product/product.component';
import { Home } from './components/home/home.component';
import { MaterialModule } from '../material.module'
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent,Product, Home],
  imports: [BrowserModule,LayoutModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
