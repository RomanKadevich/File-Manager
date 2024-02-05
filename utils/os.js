import os from "os";

class OS {
  getEOL() {
    console.log(`End-Of-Line (EOL): ${os.EOL}`);
  }

  getCPUsInfo() {
    const cpus = os.cpus();
    console.log(`Total CPUs: ${cpus.length}`);
    cpus.forEach((cpu, index) => {
      console.log(
        `CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${
          cpu.speed / 1000
        } GHz`
      );
    });
  }

  getHomeDirectory() {
    console.log(`Home Directory: ${os.homedir()}`);
  }

  getUsername() {
    console.log(`Current System User Name: ${os.userInfo().username}`);
  }

  getArchitecture() {
    console.log(`Node.js Binary CPU Architecture: ${process.arch}`);
  }

  executeCommand(command) {
    switch (command) {
      case "--EOL":
        this.getEOL();
        break;
      case "--cpus":
        this.getCPUsInfo();
        break;
      case "--homedir":
        this.getHomeDirectory();
        break;
      case "--username":
        this.getUsername();
        break;
      case "--architecture":
        this.getArchitecture();
        break;
      default:
        console.log(
          "Invalid command. Please use one of the following: --EOL, --cpus, --homedir, --username, --architecture"
        );
    }
  }
}

export default OS;
