import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = (sourcePath, targetPath) => {
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
  const zipStream = createGzip();

  readStream.pipe(zipStream).pipe(writeStream);

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err}`);
  });

  writeStream.on("finish", () => {
    console.log(`File compressed successfully: ${targetPath}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Operation failed: ${err}`);
  });
};

export default compress;
