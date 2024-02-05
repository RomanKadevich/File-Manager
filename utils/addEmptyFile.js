import { promises as fsPromises } from "fs";

const addEmptyFile = async (fileName) => {
  try {
    await fsPromises.access(fileName);

    console.error(`Operation failed: file ${fileName} already exists.`);
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fsPromises.writeFile(fileName, "");
        console.log(`File ${fileName} created successfully.`);
      } catch (writeErr) {
        console.error(`Operation failed: ${writeErr.message}`);
      }
    } else {
      console.error(`Operation failed: ${err.message}`);
    }
  }
};

export default addEmptyFile;
