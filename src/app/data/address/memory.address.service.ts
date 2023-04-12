import { Injectable } from '@angular/core';
import { concatMap, map, mergeMap, Observable, zip } from 'rxjs';
import { CollectionStorage, ECollection, MemoryStorageService } from '../memory-storage.service';
import { AddressService } from './address.service';
import { CountryService } from './country.service';
import { DTOAddress } from './dtoaddress';

@Injectable({
  providedIn: 'root'
})
export class MemoryAddressService extends AddressService {

  constructor(protected _storage: MemoryStorageService, protected countryService : CountryService) {
    super();
  }
  getStorage(): CollectionStorage<DTOAddress> {
    return this._storage.entitySpace<DTOAddress>(ECollection.ADDRESS);
  }
  search(filter?: any): Observable<DTOAddress[]> {
    return this.getStorage()
      .search(c => {
        if (filter) {
          throw "address search with filters not implemeted!"
        }
        return true;
      });
  }
  create(): Observable<DTOAddress> {
    return new Observable(subscriber => {
      let a = { id: 0, addressLine1: '', addressLine2: '', addressLine3: '', countryId: 0 };

      subscriber.next(a);
      subscriber.complete();
    })
  }
}
