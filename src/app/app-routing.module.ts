import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'protfolio',component: ProtfolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [HomeComponent,AboutComponent,ProtfolioComponent,ContactComponent]
  