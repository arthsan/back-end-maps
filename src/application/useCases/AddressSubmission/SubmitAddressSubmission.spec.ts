import { AddressSubmission } from "./SubmitAddressSubmission";

describe("Create address submission use case", () => {
  it("should be able to create a new addresses submission", async () => {
    const adds = new AddressSubmission();

    const response = await adds.execute({
      addresses: [
        "Avenida Rio Branc, 1 Centro, Rio de Janeiro RJ",
        "Praça Mal. âncora, 122 Centro, Rio de Janeiro RJ",
        "Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro"
      ],
    });

    expect(response).toBeTruthy();
  });

  it("should not create submission with less than 3 addresses", async () => {
    const adds = new AddressSubmission();

    try {
      await adds.execute({addresses: [
        "Avenida Rio Branc, 1 Centro, Rio de Janeiro RJ",
        "Praça Mal. âncora, 122 Centro, Rio de Janeiro RJ",
      ]});
    } catch (error) {
      expect(error).rejects
    }
  });
});
