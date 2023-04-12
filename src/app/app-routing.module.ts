import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanySearchComponent } from './company/company-search/company-search.component';

const routes: Routes = [
  {path: 'companies', component: CompanySearchComponent},
  {path: 'company/:id', component: CompanyEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
