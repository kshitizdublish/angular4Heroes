import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from '../../node_modules/ngx-accordion';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './services/hero/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/messages/message.service';


@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AccordionModule,
		FormsModule
	],
	providers: [HeroService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
