import cat from "./utils/cat.js";
import finish from "./utils/finish.js";
import os from "os";
import goUp from "./utils/goUp.js";
import goToDirectory from "./utils/gotToDir.js";
import ls from "./utils/ls.js";
import addEmptyFile from "./utils/addEmptyFile.js";
import renameFile from "./utils/renameFile.js";
import remove from "./utils/remove.js";
import copy from "./utils/copy.js";
import OS from "./utils/os.js";
import hash from "./utils/hash.js";
import compress from "./utils/compress.js";
import decompress from "./utils/decompress.js";
import help from "./utils/help.js";
import move from "./utils/move.js";

const commandInspect = (rl, username) => {
  const osInfo = new OS();
  let exiting = false;
  let homeDirectory = os.homedir();

  process.chdir(homeDirectory);
  console.log(`You are currently in ${homeDirectory}`);
  console.log("Enter a command: ");
  rl.prompt();
  rl.on("line", (input) => {
    const [command, ...args] = input.trim().split(" ");

    switch (command) {
      case "help":
        help();
        break;
      case "up":
        goUp();
        break;
      case "cd":
        goToDirectory(args[0]);
        break;
      case "ls":
        ls();
        break;
      case "cat":
        cat(args[0]);
        break;
      case "add":
        addEmptyFile(args[0]);
        break;
      case "rn":
        renameFile(args[0], args[1]);
        break;
      case "mv":
        move(args[0], args[1]);
        break;
      case "cp":
        copy(args[0], args[1]);
        break;
      case "rm":
        remove(args[0]);
        break;
      case "os":
        osInfo.executeCommand(args[0]);
        break;
      case "hash":
        hash(args[0]);
        break;
      case "compress":
        compress(args[0], args[1]);
        break;
      case "decompress":
        decompress(args[0], args[1]);
        break;
      case ".exit":
        exiting = true;
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        setImmediate(() => {
          rl.close();
        });
        break;
      default:
        console.log(`Unknown command: ${command}.Try again.`);
        break;
    }
    if (!exiting) {
      console.log(`You are currently in ${process.cwd()}`);
      rl.prompt();
    }
  });
  rl.on("close", () => {
    if (!exiting) {
      exiting = true;
      finish(rl, username);
    }
  });
};

export default commandInspect;
