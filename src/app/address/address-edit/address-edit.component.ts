import { Component, Input, OnInit } from '@angular/core';
import { DTOAddress } from 'src/app/data';
import { CountryService } from 'src/app/data/address/country.service';
import { DTOCountry } from 'src/app/data/address/dtocountry';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
  countries!: DTOCountry[];
  @Input() address!: DTOAddress;
  constructor(private countryService: CountryService){
    
  }

  ngOnInit(): void {
   
    this.countryService.search().subscribe(countries=>{
      this.countries = countries;
    })
  }
}
