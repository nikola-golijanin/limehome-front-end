import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'limehome-app';
  options:google.maps.MapOptions = {
    disableDefaultUI: true,

  }
  center: google.maps.LatLngLiteral = {
    lat: 48.1351, // Munich cordinates
    lng: 11.5820
  }
}
