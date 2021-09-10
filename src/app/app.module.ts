import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainComponent } from './domain/domain.component';
import { SubDomainComponent } from './sub-domain/sub-domain.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { NavComponent } from './core/nav/nav.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      DomainComponent,
      SubDomainComponent,
      HomeComponent,
      HeaderComponent,
      NavComponent,
      ContactUsComponent,
      FooterComponent
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
