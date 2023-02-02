import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { BookHotelComponent } from './book-hotel.component';

describe('BookHotelComponent', () => {
  let component: BookHotelComponent;
  let fixture: ComponentFixture<BookHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [BookHotelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
