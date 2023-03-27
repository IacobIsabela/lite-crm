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




@NgModule({

  declarations: [

    AppComponent,

    CompanySearchComponent,

    CompanyEditComponent

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

    MatInputModule

  ],

  exports: [

    MatTableModule,

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }


