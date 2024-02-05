import { createReadStream } from "fs";

const cat = (filePath) => {
  if (!filePath) {
    console.log("Empty path. Try again.");
    return;
  }
  const readStream = createReadStream(filePath);

  readStream.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  readStream.on("error", (err) => {
    console.error(`Operation failed: ${err.message}`);
  });
};

export default cat;
