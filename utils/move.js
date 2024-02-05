import { createReadStream, createWriteStream, unlink } from "fs";

const move = async (sourcePath, targetPath) => {
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
    unlink(sourcePath, (err) => {
      if (err) {
        console.error("Failed to delete the original file:", err);
      } else {
        console.log("File moved successfully!");
      }
    });
  });

  readStream.on("error", (err) => {
    console.error("Operation failed:", err);
  });

  writeStream.on("error", (err) => {
    console.error("Operation failed:", err);
  });
};

export default move;
