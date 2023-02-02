import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel, RootObject } from '../_models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private baseUrl = environment.apiUrl;

  private _hotels$ = new BehaviorSubject<Hotel[]>([])
  private _selectedHotel$ = new BehaviorSubject<Hotel | undefined>(undefined);

  hotels$ = this._hotels$.asObservable();
  selectedHotel = this._selectedHotel$.asObservable();

  constructor(private http:HttpClient) {
    this._hotels$.subscribe({
      next: (hotels) => {
        this.setSelectedHotel(hotels[0]);
      }
    }) 
  }

  setSelectedHotel(hotel?: Hotel) {
    this._selectedHotel$.next(hotel);
  }

  setSelectedHotelByIndex(index:number){
    const activeHotel = this._hotels$.value?.[index];
    this.setSelectedHotel(activeHotel);
  }
  
  public loadHotels() {
    this.http.get<RootObject>(this.baseUrl).subscribe({
      next: (response) => {
        const hotels = response.items;
        this._hotels$.next(hotels);
      },
    });
  }
}
