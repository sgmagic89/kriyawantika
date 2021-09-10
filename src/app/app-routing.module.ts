import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { HomeComponent } from './home/home.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'services/:name', component: DomainComponent},
  {path: 'sub-domain', component: SubDomainComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
