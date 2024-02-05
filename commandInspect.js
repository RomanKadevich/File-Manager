import cat from "./cat.js";
import finish from "./finish.js";
import os from "os";
import goUp from "./goUp.js";
import goToDirectory from "./gotToDir.js";
import ls from "./ls.js";
import addEmptyFile from "./addEmptyFile.js";
import renameFile from "./renameFile.js";
import remove from "./remove.js";
import copy from "./copy.js";

const commandInspect = (rl, username) => {
  let exiting = false;
  let homeDirectory = os.homedir();
  process.chdir(homeDirectory);
  console.log(`You are currently in ${homeDirectory}`);
  rl.setPrompt("Enter a command: ");
  rl.prompt();

  rl.on("line", (input) => {
    const [command, ...args] = input.trim().split(" ");

    switch (command) {
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
      case "cp":
        copy(args[0], args[1]);
        break;
      case "rm":
        remove(args[0]);
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
