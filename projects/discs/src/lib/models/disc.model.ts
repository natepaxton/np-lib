import { FlightNumbersModel } from './flight-numbers.model';

export class DiscModel {
    manufacturer: string;
    weight?: number;
    mold: string;
    flightNumbers?: FlightNumbersModel;
    color?: string;
    factoryStamp?: boolean;
    stampColor?: string;
    isTourSeries?: boolean;
    hasSignature?: boolean;
    hasBeenThrown?: boolean;
    hasInk?: boolean;
}
