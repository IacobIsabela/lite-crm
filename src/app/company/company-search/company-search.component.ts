import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { CompanyService, DTOCompany } from 'src/app/data';
import { CountryService } from 'src/app/data/address/country.service';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent implements OnInit, AfterViewInit {
  companies: DTOCompany[] = [];
  @ViewChild('txtSearchName', { static: true })
  txtSearchName!: ElementRef;

  constructor(private companyService: CompanyService) {
  }
  ngOnInit(): void {
    this.search();
  }
  ngAfterViewInit(): void {
    fromEvent(this.txtSearchName.nativeElement, 'keyup')
      .pipe(debounceTime(500))
      .subscribe(res => { console.log(`value is ${this.txtSearchName.nativeElement.value}`); this.search(); })
  }

  search() {
    let filter: any = {}
    if (this.txtSearchName.nativeElement.value) {
      filter.nameLike = this.txtSearchName.nativeElement.value;
    }
    this.companyService.search(filter).subscribe(companies => { 
      this.companies = companies;
      console.log("companies", companies); 
    });

  }
  selectedRow(row: any) {
    console.log('selectedRow', row)
  }
}
