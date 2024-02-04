 import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const argv = process.argv.slice(2);

export const username = argv[0].split("=")[1];
