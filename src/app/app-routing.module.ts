import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'aboutus',
    component: AboutusComponent
}, {
    path: 'careers',
    component: CareerComponent
},{
    path: 'contactus',
    component: ContactComponent
},{
    path: 'home',
    component: HomeComponent
},{
    path: 'services',
    component: ServicesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
