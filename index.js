import { username, rl, argv } from "./utils/constants.js";
import greeting from "./utils/greeting.js";
import controller from "./controller.js";

greeting(argv, username);
controller(rl, username);
