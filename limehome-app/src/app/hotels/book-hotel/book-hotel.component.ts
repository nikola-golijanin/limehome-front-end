import { Component, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Hotel } from 'src/app/_models/models';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent {
  @Input() hotel: Hotel | undefined;
  @Output() closeModal = new Subject<boolean>();
  today : number;


  bookHotelForm : FormGroup = new FormGroup({});

  constructor(){
    this.initializeForm();
    this.today = Date.now()
  }

  closeBookHotelModal(){
    this.closeModal.next(true);
  }

  bookHotel(){
    alert("Hotel booked");
    this.closeModal.next(true);
  }


  private initializeForm(){
    this.bookHotelForm = new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      startDate: new FormControl('',[Validators.required,this.greaterThanToday()]),
      endDate: new FormControl('',[Validators.required,this.greaterThan('startDate')]),
      numberOfGuests: new FormControl('',[Validators.required,Validators.min(1)])
    })
  }

  private greaterThan(startDate:string):ValidatorFn {
    return (control: AbstractControl) => {
      return control.value > control.parent?.get(startDate)?.value ? null : { notMatching : true }
    }
  }

  private greaterThanToday():ValidatorFn {
    return (control: AbstractControl) => {
      console.log(new Date(control.value) > new Date())
      return new Date(control.value) > new Date() ? null : { notMatching : true }
    }
  }
}
