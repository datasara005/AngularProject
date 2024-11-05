import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  providers: [
    provideHttpClient(),
  ],
})
export class AppModule {} 
