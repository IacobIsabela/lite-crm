import { DTOAddress } from "../address";
import { IDTO } from "../idto";

export interface DTOCompany extends IDTO {
    id: number;
    name: string;
    address: string;
    mainAddressId: number;
    mainAddress?: DTOAddress;
}
