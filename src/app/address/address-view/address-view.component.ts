import { Component, Input, OnInit } from '@angular/core';
import { DTOAddress } from 'src/app/data';
@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent {
  @Input() address!: DTOAddress;
  constructor(){
    
  }
}
