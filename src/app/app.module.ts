import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing } from './app.routing';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, routing,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
