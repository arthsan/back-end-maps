import { Response, Request } from "express";
import { CombineArrayTwoByTwo } from "../../utils/combineArray";
import { AddressSubmission } from "../useCases/AddressSubmission/SubmitAddressSubmission";
import { CalculateDistance } from "../useCases/CalculateDistance/CalculateDistance";
import {
  DistanceResponse,
  PayloadResponse,
} from "../useCases/CalculateDistance/CalculateDistanceDTO";
import { FetchCoordinates } from "../useCases/FetchCoordinates/FetchCoordinates";
import { AddressesResponse } from "../useCases/FetchCoordinates/fetchCoordinatesDTO";

export class SubmitAddressController {
  constructor(
    private addressSubmission: AddressSubmission,
    private fetchCoordinates: FetchCoordinates,
    private calculateDistance: CalculateDistance
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const addresses = await this.addressSubmission.execute({
        addresses: request.body,
      });

      const coordinates = await this.fetchCoordinates.execute(addresses);

      const payload = this.calculateDistanceAndCreatePayload(coordinates);

      return response.json(payload);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error",
      });
    }
  }

  private calculateDistanceAndCreatePayload(coordinates: AddressesResponse[]) {
    const coordiantesCombination = CombineArrayTwoByTwo(coordinates);

    let distances: DistanceResponse[] = [];
    let distanceValues: number[] = [];
    coordiantesCombination.map((pointCoordinates: AddressesResponse[]) => {
      const range = this.calculateDistance.execute(
        pointCoordinates[0],
        pointCoordinates[1]
      );

      const distanceResponse: DistanceResponse = {
        firstAddress: pointCoordinates[0],
        secondAddress: pointCoordinates[1],
        distanceValue: range,
      };

      distances.push(distanceResponse);
      distanceValues.push(distanceResponse.distanceValue);
    });

    const min = Math.min.apply(null, distanceValues);
    const max = Math.max.apply(null, distanceValues);

    const minimum = distances.filter((minValue) => {
      if (minValue.distanceValue === min) {
        return minValue;
      }
    });

    const maximum = distances.filter((maxValue) => {
      if (maxValue.distanceValue === max) {
        return maxValue;
      }
    });

    const payload: PayloadResponse = {
      furtherComparison: maximum[0],
      nearestComparison: minimum[0],
      distancesList: distances,
    };

    return payload;
  }
}
