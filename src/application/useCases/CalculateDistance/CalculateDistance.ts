import { AddressesResponse } from "../FetchCoordinates/fetchCoordinatesDTO";

export class CalculateDistance {
   execute(firstAddress: AddressesResponse, secondAddress: AddressesResponse) {
    const latitude = Math.pow(
      firstAddress.latitude - secondAddress.latitude,
      2
    );

    const longitude = Math.pow(
      firstAddress.longitude - secondAddress.longitude,
      2
    );

    return Math.sqrt(latitude + longitude) * 100;
  }
}
