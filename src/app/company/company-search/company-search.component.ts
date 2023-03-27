import { Component } from '@angular/core';

import { DTOCompany } from 'src/app/data';




@Component({

  selector: 'app-company-search',

  templateUrl: './company-search.component.html',

  styleUrls: ['./company-search.component.css']

})

export class CompanySearchComponent {

    companies: DTOCompany[] = [{id: 1, name:"Fortech", address: "Cluj"}];




  selectedRow(row: any) {

    console.log('selectedRow', row)

  }

}