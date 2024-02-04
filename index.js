import fs from "node:fs/promises";
// import { fileURLToPath } from "node:url";
// import { dirname, join } from "node:path";

// const filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(filename);
//   const filePath = join(__dirname, "files", "fileToRead.txt");


import greeting from "./greeting.js";

import readline from "readline"
import commandInspect from "./commandInspect.js";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


greeting();
commandInspect(rl)