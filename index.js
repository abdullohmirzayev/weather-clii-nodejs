import getArgs from "./helpers/args.js";
import { saveKeyValue, TOKEN__DICTIONARY } from "./services/srorage.service.js";
import {
  printError,
  printSuccess,
  printHelp,
} from "./services/log.services.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
  }
  try {
    await saveKeyValue(TOKEN__DICTIONARY.token, token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const startCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    printHelp();
  }
  if (args.s) {
    // save city
  }
  if (args.t) {
    return saveToken(args.t);
  }
  getWeather(process.env.CITY ?? "Uzbekistan");
};
startCLI();
