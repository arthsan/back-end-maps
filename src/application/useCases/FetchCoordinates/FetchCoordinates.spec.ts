import { FetchCoordinates } from "./FetchCoordinates";

describe("Fetch coordinates useCase", () => {
  it("should be able to fetch coordinates", async () => {
    const coord = new FetchCoordinates();

    const response = await coord.execute([
      "Avenida Rio Branc, 1 Centro, Rio de Janeiro RJ",
      "Praça Mal. âncora, 122 Centro, Rio de Janeiro RJ",
      "Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro",
    ]);

    expect(response).toBeTruthy();
  });

  it("should has an error with submission", async () => {
    const coord = new FetchCoordinates();

    const submission = [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt",
    ]

    try {
      await coord.execute(submission)
    } catch (error) {
      expect(error).rejects;
    }
  });
});
