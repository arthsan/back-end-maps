import { CalculateDistance } from "./CalculateDistance";

describe("Calculate distance useCase", () => {
  it("should be able to calculate distances", async () => {
    const coord = new CalculateDistance();

    const response = await coord.execute(
      {addressName:"Avenida Rio Branc, 1 Centro, Rio de Janeiro RJ",latitude: -22.8973551, longitude: -43.1802782},
      {addressName:"Praça Mal. âncora, 122 Centro, Rio de Janeiro RJ", latitude: -22.9039608, longitude: -43.1703536},
    );

    expect(response).toBeTruthy();
  });

  it("should return the real distance = 1.19 km", async () => {
    const coord = new CalculateDistance();

    const response = await coord.execute(
      {addressName:"Avenida Rio Branc, 1 Centro, Rio de Janeiro RJ",latitude: -22.8973551, longitude: -43.1802782},
      {addressName:"Praça Mal. âncora, 122 Centro, Rio de Janeiro RJ", latitude: -22.9039608, longitude: -43.1703536},
    );

    expect(Number(response.toFixed(2))).toBe(1.19);
  });
});
