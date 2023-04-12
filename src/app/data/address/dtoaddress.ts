import { IDTO } from "../idto";
import { DTOCountry } from "./dtocountry";

export interface DTOAddress extends IDTO {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    countryId: number;
    country?: DTOCountry;
}
