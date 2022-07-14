import { AddressesResponse } from "../FetchCoordinates/fetchCoordinatesDTO";

export interface DistanceResponse {
  firstAddress: AddressesResponse;
  secondAddress: AddressesResponse;
  distanceValue: number;
}

export interface PayloadResponse {
  distancesList: DistanceResponse[];
  nearestComparison: DistanceResponse;
  furtherComparison: DistanceResponse;
}
