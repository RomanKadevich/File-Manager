const greeting = (argv, username) => {
  
    if (argv.length >= 1 && argv[0].startsWith("--username=")) {
    
      console.log(`Welcome to the File Manager, ${username}!`);
   
    } 
    else {
      console.error("Invalid command line arguments. Please provide --username=<your_username>");
    }
  };
  

  
  export default greeting;