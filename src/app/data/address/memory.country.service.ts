import { Injectable } from '@angular/core';
import { mergeMap, Observable, zip } from 'rxjs';
import { CollectionStorage, ECollection, MemoryStorageService } from '../memory-storage.service';
import { CountryService } from './country.service';
import { DTOCountry } from './dtocountry';

@Injectable({
    providedIn: 'root'
})
export class MemoryCountryService extends CountryService {

    protected seed() {
        let countries = [
            { code: "RO", name: "Romania" },
            { code: "NL", name: "The Netherlands" },
        ]

        return zip(countries.map(x => this.create().pipe(
            mergeMap(c => {
                Object.assign(c, x);
                return this.save(c)
            })
        )));
    }

    constructor(protected _storage: MemoryStorageService) {
        super();
        this.seed().subscribe();
    }
    getStorage(): CollectionStorage<DTOCountry> {
        return this._storage.entitySpace<DTOCountry>(ECollection.COUNTRY);
    }
    search(filter?: any): Observable<DTOCountry[]> {
        return this.getStorage()
            .search(c => {
                if (filter) {
                    throw "country search with filters not implemeted!"
                }
                return true;
            });
    }
    create(): Observable<DTOCountry> {
        return new Observable(subscriber => {
            let a = { id: 0, code: '', name: '' };

            subscriber.next(a);
            subscriber.complete();
        })
    }
}
