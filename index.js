import { username, rl, argv } from "./constants.js";
import greeting from "./greeting.js";
import commandInspect from "./commandInspect.js";

greeting( argv,username);
commandInspect(rl, username);


