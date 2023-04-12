import { Observable } from "rxjs";
import { IDTO } from "./idto";
import { CollectionStorage, MemoryStorageService } from "./memory-storage.service";

export abstract class DTOEntityService<DTO extends IDTO> {
    constructor(){
        
    }
    abstract search(filter?: any): Observable<DTO[]>;
    abstract create(): Observable<DTO>;
    protected abstract getStorage():CollectionStorage<DTO>;

    getById(id: number): Observable<DTO> {
        return this.getStorage().getById(id);
    }
    
    save(entity: DTO): Observable<DTO> {
        return this.getStorage().save(entity);
    }
}