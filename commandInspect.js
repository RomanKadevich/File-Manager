import cat from "./cat.js";

const commandInspect = (rl) => {
  rl.setPrompt("Enter a command: ");
  rl.prompt();

  rl.on("line", (input) => {
    const [command, ...args] = input.trim().split(" ");

    switch (command) {
      case "cat":
        cat(args[0]);
        break;

      case "exit":
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        rl.close();
        break;

      default:
        console.log(`Unknown command: ${command}. Try again.`);
        break;
    }

    rl.prompt();
  });

  rl.on("close", () => {
    process.exit(0);
  });
};

export default commandInspect;
