import fs from "node:fs/promises";

const renameFile = async (sourceFilePath, targetFilePath) => {
  try {
    await fs.access(targetFilePath);

    throw new Error("Operation failed: properFilename file already exists");
  } catch (accessError) {
    if (accessError.code === "ENOENT") {
      try {
        await fs.rename(sourceFilePath, targetFilePath);
        console.log("File was renamed successfully");
      } catch (createError) {
        console.error("Error renaming", createError.message);
      }
    } else {
      console.error(
        "Operation failed: error accessing target folder:",
        accessError.message
      );
    }
  }
};

export default renameFile;
