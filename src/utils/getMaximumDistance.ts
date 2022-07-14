import { DistanceResponse } from "../application/useCases/CalculateDistance/CalculateDistanceDTO";

function getMaximumDistance(distances: DistanceResponse[], max: any, min: any) {
  return distances.filter((maxValue) => {
    if (maxValue.distanceValue === max) {
      return min;
    }
  });
}