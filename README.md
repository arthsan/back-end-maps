## What is inside?

This project uses lot of stuff as:

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Google Maps Services](https://prettier.io/)
- [Express](https://prettier.io/)
- [UUIDv4](https://prettier.io/)

## Getting Started

This application can calculate the distance between several addresses and retrieve the nearest, the longest and all combinations you asked for.

First, run the development server:

```bash
yarn start
```

Open [http://localhost:3333/distance](http://localhost:3333/distance) with your API platform to see the result.

Use the method `POST` to send the address you want to compare distances.

The sending structure must be an array of strings on the body and must has more than 3 items:

```json
["Rua Sena Madureira, 1225", "Rua Gomes de Carvalho, 781", "Rua Clodomiro Amazonas, 150"]
```

## Commands

- `start`: runs your application on `localhost:3333`
- `test`: runs jest to test all components and pages

## Testing

To check the tests use the command:

```bash
yarn test
```

and see the current coverage
