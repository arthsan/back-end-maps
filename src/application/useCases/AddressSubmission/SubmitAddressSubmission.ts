import { Submission } from "../../../domain/entities/Submission";
import { IAddressSubmissionRequestDTO } from "./SubmitAddressDTO";

export class AddressSubmission {
  async execute({ addresses }: IAddressSubmissionRequestDTO) {
    if (addresses.length < 2) {
      throw new Error("Addresses must be more than 3 to compare");
    }

    const submission = Submission.create({
      addresses: addresses,
    });

    return submission.props.addresses;
  }
}
