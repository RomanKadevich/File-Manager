import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export let argv = process.argv.length > 2 ? process.argv.slice(2) : null;

export const username = argv ? argv[0].split("=")[1] : "";
