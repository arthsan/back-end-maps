import { Address } from "../../../domain/entities/Address";
import { AddressSubmission } from "./SubmitAddressSubmission";

describe("Create address submission use case", () => {
  it("should be able to create a new addresses submission", async () => {
    const adds = new AddressSubmission();

    const response = await adds.execute({
      addresses: [
        Address.create({
          name: "Rua A",
          city: "Rio de Janeiro",
          number: 123,
          state: "RJ",
          zipCode: 321,
        }),
        Address.create({
          name: "Rua B",
          city: "Rio de Janeiro",
          number: 123,
          state: "RJ",
          zipCode: 321,
        }),
        Address.create({
          name: "Rua C",
          city: "Rio de Janeiro",
          number: 123,
          state: "RJ",
          zipCode: 321,
        }),
      ],
    });

    expect(response).toBeTruthy();
  });

  it("should not create submission with less than 3 addresses", async () => {
    const adds = new AddressSubmission();

    const response = await adds.execute({
      addresses: [
        Address.create({
          name: "Rua A",
          city: "Rio de Janeiro",
          number: 123,
          state: "RJ",
          zipCode: 321,
        }),
        Address.create({
          name: "Rua B",
          city: "Rio de Janeiro",
          number: 123,
          state: "RJ",
          zipCode: 321,
        }),
      ],
    });

    expect(response.props.addresses.length).toBeLessThan(3);
  });
});
