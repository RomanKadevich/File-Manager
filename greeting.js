const greeting = (  argv, username) => {
  
    if ( argv&&argv.length >= 1 &&argv[0].startsWith("--username=")) {
    
      console.log(`Welcome to the File Manager, ${username}!`);
   
    } 
    else {
      console.error("Invalid command line arguments. Please provide --username=<your_username>");
      process.exit(1)
    }
  };
  

  
  export default greeting;