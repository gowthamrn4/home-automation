import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    AboutusComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'home'},
      {path:'home',component:HomeComponent},
      {path:'services',component:ServicesComponent},
      {path:'product',component:ProductsComponent},
      {path:'contact',component:ContactusComponent},
      {path:'about',component:AboutusComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
