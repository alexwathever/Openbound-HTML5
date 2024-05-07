import * as awilix from "awilix";
import { logger } from "@/infra/utils/logger";
import Config from "@/infra/config";
import { Controller } from "@/infra/utils/controller";
import { CaptureControllers } from "@/infra/utils/captureControllers";

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

const dependencies = {
  logger: awilix.asValue(logger),
};

container.register({
  ...dependencies,
  config: awilix.asClass(Config),
  controller: awilix.asClass(Controller),
  captureControllers: awilix.asClass(CaptureControllers),
});
