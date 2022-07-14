import { Client, GeocodeResponse } from "@googlemaps/google-maps-services-js";
import { AddressesResponse } from "../../application/useCases/FetchCoordinates/fetchCoordinatesDTO";
import { IGeocodingService } from "./IGoogleMapsProvider";
require("dotenv").config();

const client = new Client({});
let key: string;

export class GeocodingService implements IGeocodingService {
  validateEnvironment = () => {
    if (process.env.GOOGLE_API_KEY) {
      key = process.env.GOOGLE_API_KEY;
    } else {
      throw new Error("GOOGLE_API_KEY environment variable is not set");
    }
  };

  async getLatitudeAndLongitude(submission: string[]) {
    this.validateEnvironment();

    const response = submission.map((address) =>
      client
        .geocode({
          params: {
            address: address,
            key: key,
          },
          timeout: 1000,
        })
        .then((response) => {
          if (response.data.status == "OK") {
            return response;
          } else if (response.data.status == "ZERO_RESULTS") {
            throw new Error("Invalid address provided");
          } else {
            throw new Error("Geocoding query error");
          }
        })
    );

    const Addresses: GeocodeResponse[] = await Promise.all(response);

    const addressesResponse: AddressesResponse[] = Addresses.map((addr) => ({
      addressName: addr.data.results[0].formatted_address,
      latitude: addr.data.results[0].geometry.location.lat,
      longitude: addr.data.results[0].geometry.location.lng,
    }));

    return addressesResponse;
  }
}
