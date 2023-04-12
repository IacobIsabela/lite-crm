import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService, DTOCompany } from 'src/app/data';
import { CountryService } from 'src/app/data/address/country.service';
import { DTOCountry } from 'src/app/data/address/dtocountry';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  company!: DTOCompany;
  countries!: DTOCountry[];
  constructor(private route: ActivatedRoute, private companyService: CompanyService, private countryService: CountryService) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    (id === "create" ?
      this.companyService.create()
      : this.companyService.getById(Number(id))
    ).subscribe(c => { 
      this.company = c;
      console.log("company", this.company); 
    })

    this.countryService.search().subscribe(countries=>{
      this.countries = countries;
    })
  }

  onSave() {
    this.companyService.save(this.company).subscribe();
  }
}
