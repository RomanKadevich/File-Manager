import fs from "node:fs/promises";


const remove = async (sourceFilePath) => {


  try {
    await fs.access(sourceFilePath);
    await fs.unlink(sourceFilePath);
    console.log("File was removed successfully");
  } catch (accessError) {
    console.error(
      "FS operation failed: Error deleting file:",
      accessError.message
    );
  }
};
export default remove;