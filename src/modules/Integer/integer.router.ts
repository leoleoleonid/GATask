import express from "express";
import IntegerController from "./integer.controller";
import {ErrorException} from "../../common/errors/error-exception";
import {ErrorCode} from "../../common/errors/error-code";

const router = express.Router();

router.get("/:integer", async (req, res, next) => {
  //TODO add validation
  let reqInt: number = parseInt(req.params['integer']);

  if (!reqInt && reqInt !== 0) {
    return next(new ErrorException(ErrorCode.ValidationError, 'Not valid or empty param')); //TODO fix error message
  }
  const controller = IntegerController.createInstance();
  const response = controller.calc(reqInt);
  return res.send(response);
});

export default router