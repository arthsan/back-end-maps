import { SubmitAddressController } from "./SubmitAddressController";
import { FetchCoordinates } from "../useCases/FetchCoordinates/FetchCoordinates";
import { AddressSubmission } from "../useCases/AddressSubmission/SubmitAddressSubmission";
import { CalculateDistance } from "../useCases/CalculateDistance/CalculateDistance";

const addressSubmission = new AddressSubmission();
const fetchCoordinates = new FetchCoordinates();
const calculateDistance = new CalculateDistance();

const submitAddressController = new SubmitAddressController(
  addressSubmission,
  fetchCoordinates,
  calculateDistance
);

export { submitAddressController };
