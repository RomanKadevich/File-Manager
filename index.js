import fs from "node:fs/promises";
// import { fileURLToPath } from "node:url";
// import { dirname, join } from "node:path";

// const filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(filename);
//   const filePath = join(__dirname, "files", "fileToRead.txt");

import greeting from "./greeting.js";

import readline from "readline";
import commandInspect from "./commandInspect.js";
import finish from "./finish.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const argv = process.argv.slice(2);
const username = argv[0].split("=")[1];

greeting(username);
commandInspect(rl);
rl.on("close", () => {
  finish(rl, username);
});

