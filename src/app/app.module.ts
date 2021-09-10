import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainComponent } from './domain/domain.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      DomainComponent,
      SubDomainComponent,
      HomeComponent
   ],
   imports: [
	 BrowserModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
