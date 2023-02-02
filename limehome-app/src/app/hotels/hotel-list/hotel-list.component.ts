import { Component, OnInit, ViewChild } from '@angular/core';
import { Hotel } from 'src/app/_models/models';
import { HotelsService } from 'src/app/_services/hotels.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  currentSlideIndex: number | undefined;
  hotels: Hotel[] = [];
  config: SwiperOptions = {
    centeredSlides: true,
    slidesPerView: 1.25,
    spaceBetween: 20,
    navigation: false,
    pagination: false,
    scrollbar: { draggable: true },
    loop:true,
    loopedSlides: 2
  };

  constructor(private hotelsService:HotelsService){}  
  ngOnInit() {  
    this.loadHotels();
  }

  private loadHotels(){
    this.hotelsService.hotels$.subscribe({
      next: (hotels) => {
        if(hotels){
          this.hotels = hotels;
        }
      }
    })
  }
  
  onSlideChange(event:any){
    this.hotelsService.setSelectedHotel(event[0].realIndex);
  }
}
