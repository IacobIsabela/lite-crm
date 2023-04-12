import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CompanySearchComponent } from './company/company-search/company-search.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { AddressService, CompanyService, MemoryAddressService, POCCompanyService } from './data';
import { MemoryCompanyService } from './data/company/memory-company.service';
import { CountryService } from './data/address/country.service';
import { MemoryCountryService } from './data/address/memory.country.service';
import { AddressEditComponent } from './address/address-edit/address-edit.component';
import { AddressViewComponent } from './address/address-view/address-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanyEditComponent,
    AddressEditComponent,
    AddressViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatTableModule,
  ],
  providers: [
    {provide: CompanyService, useClass: MemoryCompanyService},
    {provide: AddressService, useClass: MemoryAddressService},
    {provide: CountryService, useClass: MemoryCountryService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
