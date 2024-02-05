const finish = (rl, username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
};

export default finish;
