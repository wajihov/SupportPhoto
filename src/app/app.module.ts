import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadImageComponent } from './load/load-image/load-image.component';
import { NavbarComponent } from './load/navbar/navbar.component';
import { MenuComponent } from './load/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadImageComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
