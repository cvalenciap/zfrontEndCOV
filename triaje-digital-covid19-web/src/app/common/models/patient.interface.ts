import { Coordinate } from './coordinate.interface';
import { Ubigeo } from './ubigeo.interface';

export interface Patient {
    fullName: string;
    docType: string;
    docNumber: string;
    email: string;
    birthday: string;
    gender: string;
    phone: string;
    address: string;
    coordinate: Coordinate;
    ubigeo: Ubigeo
}
