import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hotel } from 'src/app/_models/models';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {
  @Input() hotel : Hotel | undefined;
  priceConst = 95;

}
