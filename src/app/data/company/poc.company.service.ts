import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DTOCompany } from './dtocompany';

@Injectable({
  providedIn: 'root'
})
export class POCCompanyService {
  // private _companies: DTOCompany[] = [{ id: 1, name: "Fortech", address: "Cluj" }];
  // private _maxCompanyId: number = 0;
  // constructor() { }
  // search(filter?: { nameLike?: string }): Observable<DTOCompany[]> {
  //   return new Observable(subscriber => {
  //     let found = this._companies.filter(c => {
  //       if (filter) {
  //         return !filter.nameLike || c.name.toLowerCase().includes(filter.nameLike.toLowerCase())
  //       }
  //       return true;
  //     });
  //     subscriber.next(found);
  //     subscriber.complete();
  //   });
  // }
  // getById(id: number): Observable<DTOCompany> {
  //   return new Observable(subscriber => {
  //     let company = this._companies.find(c => c.id == id);
  //     if (!company) throw new Error(`company with id=${id} cannot be found!`);
  //     subscriber.next(company);
  //     subscriber.complete();
  //   })
  // }
  // createCompany(id: number = 0): Observable<DTOCompany> {
  //   return new Observable(subscriber => {
  //     let c = { id, name: '', address: '' };
  //     subscriber.next(c);
  //     subscriber.complete();
  //   });
  // }

  // private registerCompany(): Observable<DTOCompany> {
  //   return this.createCompany(++this._maxCompanyId)
  //     .pipe(
  //       map(c => {
  //         this._companies.push(c);
  //         return c;
  //       })
  //     );
  // }
  // save(company: DTOCompany): Observable<DTOCompany> {
  //   return (company.id ? this.getById(company.id) : this.registerCompany())
  //     .pipe(
  //       map(c => {
  //         Object.assign(c, company);
  //         return c;
  //       })
  //     );
  // }
}
