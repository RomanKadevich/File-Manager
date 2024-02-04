import fs from "node:fs/promises";
import { username, rl, argv } from "./constants.js";
// import { fileURLToPath } from "node:url";
// import { dirname, join } from "node:path";

// const filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(filename);
//   const filePath = join(__dirname, "files", "fileToRead.txt");

import greeting from "./greeting.js";


import commandInspect from "./commandInspect.js";





greeting(argv,username);
commandInspect(rl, username);


