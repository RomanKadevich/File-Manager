import { createReadStream, createWriteStream } from "fs";

const copy = async (sourcePath, targetPath) => {
  if (!sourcePath) {
    console.log("Empty source path. Try again.");
    return;
  }
  if (!targetPath) {
    console.log("Empty target path. Try again.");
    return;
  }
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);

  readStream.pipe(writeStream);

  readStream.on("end", () => {
    console.log("File copied successfully!");
  });

  readStream.on("error", (err) => {
    console.error("Operation failed:", err);
  });

  writeStream.on("error", (err) => {
    console.error("Operation failed:", err);
  });
};

export default copy;
