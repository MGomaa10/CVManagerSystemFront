import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersInterceptors } from 'src/@shared/interceptors/headers.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeadersInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
