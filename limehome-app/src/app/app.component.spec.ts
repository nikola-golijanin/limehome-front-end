import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { AppComponent } from './app.component';
import { Hotel } from './_models/models';
import { HotelsService } from './_services/hotels.service';

@Component({
  selector: 'app-nav',
  template: '',
})
class MockNavComponent {}

@Component({
  selector: 'google-map',
  template: '',
})
class MockMapComponent {
  @Input() height: any;
  @Input() center: any;
  @Input() options: any;
}

@Component({
  selector: 'app-hotel-list',
  template: '',
})
class MockHotelListComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let hotelService: HotelsService;

  beforeEach(async () => {
    hotelService = jasmine.createSpyObj('HotelsService', ['loadHotels']);
    hotelService.hotels$ = of([]);
    hotelService.selectedHotel = new Observable();
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: HotelsService,
          useValue: hotelService,
        },
      ],
      declarations: [
        AppComponent,
        MockNavComponent,
        MockMapComponent,
        MockHotelListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
    expect(hotelService.loadHotels).toHaveBeenCalled();
  });
});
