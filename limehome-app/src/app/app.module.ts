import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SwiperModule } from 'swiper/angular';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HotelListComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
