import { resolve } from "path";
import { existsSync } from "fs";

const goToDirectory = (pathToDirectory) => {
  const targetDir = resolve(process.cwd(), pathToDirectory);
  if (!existsSync(targetDir)) {
    console.error(`Error: Directory '${targetDir}' does not exist.`);
    return;
  }
  process.chdir(targetDir);
};

export default goToDirectory;
