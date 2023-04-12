import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IDTO } from './idto';

export enum ECollection {
  COMPANY,
  ADDRESS,
  COUNTRY,
  COMPANYADDRESS
}

export class CollectionStorage<DTO extends IDTO> {
  _entities: Array<IDTO> = [];
  _maxId: number = 0;
  _collectionName!: string;
  constructor(collection: ECollection) {
    this._collectionName = collection.toString();
  }
  getById(id: number): Observable<DTO> {
    return new Observable(subscriber => {
      let e = this._entities.find(c => c.id == id);
      if (!e) throw new Error(`${this._collectionName} with id=${id} cannot be found!`);
      subscriber.next(<DTO>e);
      subscriber.complete();
    })
  }

  private registerNewEntity(): Observable<IDTO> {
    return new Observable(subscriber => {
      let e = { id: ++this._maxId };
      this._entities.push(e);
      subscriber.next(e);
      subscriber.complete();
    });
  }
  save<DTO extends IDTO>(entity: DTO): Observable<DTO> {
    return (entity.id ? this.getById(entity.id) : this.registerNewEntity())
      .pipe(
        map(c => {
          delete (<any>entity).id;
          Object.assign(c, entity);
          Object.assign(entity, c);
          
          return <DTO>c;
        })
      );
  }
  search(condition: { (e: DTO): boolean }): Observable<DTO[]> {
    return new Observable(subscriber => {
      let found = this._entities.filter(<{ (e: IDTO): boolean }>condition);
      subscriber.next(<DTO[]>found);
      subscriber.complete();
    })
  }
}

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService {

  constructor() { }
  _entities: CollectionStorage<IDTO>[] = [];

  entitySpace<DTO extends IDTO>(fromCollection: ECollection): CollectionStorage<DTO> {
    if (!this._entities[fromCollection]) {
      this._entities[fromCollection] = <CollectionStorage<DTO>>(new CollectionStorage<IDTO>(fromCollection));
    }
    return <CollectionStorage<DTO>>this._entities[fromCollection];
  }
}
