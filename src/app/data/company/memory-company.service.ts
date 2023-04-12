import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { AddressService } from '../address';
import { ECollection, MemoryStorageService } from '../memory-storage.service';
import { CompanyService } from './company.service';
import { DTOCompany } from './dtocompany';

@Injectable({
    providedIn: 'root'
})
export class MemoryCompanyService extends CompanyService {

    protected seed() {


        return this.create().pipe(
            mergeMap(c => {
                c.name = 'Fortech';
                c.mainAddress!.addressLine1 = "frunzisului";
                c.mainAddress!.addressLine2 = "cluj";
                
                return this.save(c)
            })
        );
    }

    constructor(private _storage: MemoryStorageService,  protected addressService: AddressService) {
        super();
        this.seed().subscribe();
    }

    protected getStorage() {
        return this._storage.entitySpace<DTOCompany>(ECollection.COMPANY)
    }
    search(filter?: { nameLike?: string }): Observable<DTOCompany[]> {
        return this.getStorage()
            .search(c => {
                if (filter) {
                    return !filter.nameLike || c.name.toLowerCase().includes(filter.nameLike.toLowerCase())
                }
                return true;
            });
    }
    create(): Observable<DTOCompany> {
        let c: DTOCompany = { id: 0, name: '', address: '', mainAddressId: 0 };
        return this.addressService.create().pipe(
            map(a => {
                c.mainAddress = a;
                return c
            })
        );
    }

    override save(entity: DTOCompany): Observable<DTOCompany>{
        return this.addressService.save(entity.mainAddress!).pipe(
            mergeMap(a => {
                entity.mainAddressId = a.id;
                return super.save(entity)
            })
        )
    }    
}

