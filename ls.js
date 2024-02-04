import { resolve } from "path";
import { promises as fsPromises } from "fs";

const ls = async () => {
  const currDir = process.cwd();

  try {
    const elements = await fsPromises.readdir(currDir);

    const files = [];
    const folders = [];

    for (const elem of elements) {
      const itemPath = resolve(currDir, elem);
      const stats = await fsPromises.stat(itemPath);

      if (stats.isDirectory()) {
        folders.push({ name: elem, type: "Folder" });
      } else if (stats.isFile()) {
        files.push({ name: elem, type: "File" });
      }
    }

    folders.sort((a, b) => a.name.localeCompare(b.name));
    files.sort((a, b) => a.name.localeCompare(b.name));

    console.log("║    Name     ║  Type ║");
    console.log("╠════════════════════╣");

    folders.forEach((folder) => {
      console.log(`║ ${folder.name}\t\t║ ${folder.type}   ║`);
    });

    files.forEach((file) => {
      console.log(`║ ${file.name}\t\t║ ${file.type}   ║`);
    });
  } catch (error) {
    console.error(`Operation failed: ${error.message}`);
  }
};

export default ls;
