const greeting = () => {
    const argv = process.argv.slice(2);
  console.log(argv)
    if (argv.length >= 1 && argv[0].startsWith("--username=")) {
      const username = argv[0].split("=")[1];
      console.log(`Welcome to the File Manager, ${username}!`);
   
    } 
    else {
      console.error("Invalid command line arguments. Please provide --username=<your_username>");
    }
  };
  

  
  export default greeting;