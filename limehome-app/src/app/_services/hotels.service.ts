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
  
  hotels$ = this._hotels$.asObservable();
  constructor(private http:HttpClient) { 
  }

  public loadHotels() {
    this.http.get<RootObject>(this.baseUrl).subscribe({
      next: (response) => {
        const hotels = response.items;
        debugger;
        this._hotels$.next(hotels);
      },
    });
  }
}
