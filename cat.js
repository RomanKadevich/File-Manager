import { createReadStream } from "fs";


const cat=(filePath)=> {
    const readStream = createReadStream(filePath);
  
    readStream.on('data', (chunk) => {
      console.log(chunk.toString());
    });
  
  
    readStream.on('error', (err) => {
      console.error(`Operation failed: ${err.message}`);
    });
  }

  export default cat;