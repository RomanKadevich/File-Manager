import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompress = (sourcePath, targetPath) => {
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
  const unzipStream = createGunzip();

  readStream.pipe(unzipStream).pipe(writeStream);

  readStream.on("error", (err) => {
    console.error(`Operation failed.Error reading compressed file: ${err}`);
  });

  writeStream.on("finish", () => {
    console.log(`File decompressed successfully: ${targetPath}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Operation failed.Error writing decompressed file: ${err}`);
  });
};

export default decompress;
