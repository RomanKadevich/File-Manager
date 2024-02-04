import { resolve } from "path";

const goUp = () => {
  const currentDirectory = process.cwd();

  const parentDirectory = resolve(currentDirectory, "..");
  if (currentDirectory === parentDirectory) {
    console.log("You are already in the root directory.");
    return;
  }

  process.chdir(parentDirectory);
  console.log(`You are now in ${process.cwd()}`);
};

export default goUp;
