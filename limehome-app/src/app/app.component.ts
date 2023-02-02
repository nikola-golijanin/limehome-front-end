import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Hotel } from './_models/models';
import { HotelsService } from './_services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('googleMap') googleMap? : GoogleMap; 
  homeIcon = '../../assets/home-icon.svg';
  activeHomeIcon = '../../assets/home-icon-active.svg';
  hotels: Hotel[] = [];
  selectedHotel? : Hotel;
  options:google.maps.MapOptions = {
    disableDefaultUI: true,
  }
  center: google.maps.LatLngLiteral = {
    lat: 48.1351, // Munich cordinates
    lng: 11.5820
  }

  constructor(private hotelsService:HotelsService, private changeDetectorRef: ChangeDetectorRef){}  

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

    this.hotelsService.selectedHotel.subscribe({
      next: (selectedHotel) => {
        const selectedHotelLocation = selectedHotel?.position ?? this.center;
        this.googleMap?.panTo(selectedHotelLocation);
        this.selectedHotel = selectedHotel;
        this.changeDetectorRef.detectChanges();
      }
    })
  }
}
