import { GeocodingService } from "../../../providers/googleMaps/GoogleMapsProvider";
import { AddressesResponse } from "./fetchCoordinatesDTO";

export class FetchCoordinates {
  async execute(submission: string[]) {
    const geocodingService = new GeocodingService();

    let location: AddressesResponse[];
    try {
      location = await geocodingService.getLatitudeAndLongitude(submission);
    } catch (error) {
      throw new Error(error).message;
    }

    return location;
  }
}
