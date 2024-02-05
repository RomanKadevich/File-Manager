import { createReadStream } from "fs";
import { createHash } from "crypto";

const hash = (filePath) => {
  if (!filePath) {
    console.log("Empty path. Try again.");
    return;
  }
  const hash = createHash("sha256");
  const readStream = createReadStream(filePath);

  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(`Hash of ${filePath}: ${fileHash}`);
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file: ${err}`);
  });
};

export default hash;
