import { Router } from "express";
import { submitAddressController } from "./application/controller";

const router = Router();

router.post("/distance", (request, response) => {
  return submitAddressController.handle(request, response);
});

export { router };
