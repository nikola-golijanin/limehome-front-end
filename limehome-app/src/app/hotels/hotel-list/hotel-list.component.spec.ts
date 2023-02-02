import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { HotelsService } from 'src/app/_services/hotels.service';

import { HotelListComponent } from './hotel-list.component';

@Component({
  selector: 'swiper',
  template: '',
})
class MockSwiperComponent {
  @Input() config: any;
}

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(async () => {
    const hotelService = jasmine.createSpyObj('HotelsService', ['loadHotels']);
    hotelService.hotels$ = new Observable();
    hotelService.selectedHotel = new Observable();

    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HotelsService,
          useValue: hotelService,
        },
      ],
      declarations: [HotelListComponent, MockSwiperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
