import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SwiperModule } from 'swiper/angular';
import { HotelListComponent } from './hotels/hotel-list/hotel-list.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';
import { BookHotelComponent } from './hotels/book-hotel/book-hotel.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HotelListComponent,
    HotelCardComponent,
    BookHotelComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    SwiperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
