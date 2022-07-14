import { AddressesResponse } from "../../application/useCases/FetchCoordinates/fetchCoordinatesDTO";

export interface IGeocodingService {
  readonly validateEnvironment: () => void;
  getLatitudeAndLongitude(addresses: string[]): Promise<AddressesResponse[]>;
}


