import { Component, OnInit } from '@angular/core';
import { Hotel } from './_models/models';
import { HotelsService } from './_services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'limehome-app';
  hotels: Hotel[] = [];
  options:google.maps.MapOptions = {
    disableDefaultUI: true,

  }
  center: google.maps.LatLngLiteral = {
    lat: 48.1351, // Munich cordinates
    lng: 11.5820
  }

  constructor(private hotelsService:HotelsService){}  

  ngOnInit(): void {
    this.loadHotels();
  }

  private loadHotels(){
    this.hotelsService.loadHotels();
    this.hotelsService.hotels$.subscribe({
      next: (hotels) => {
        this.hotels = hotels;
      }
    });
  }
}
