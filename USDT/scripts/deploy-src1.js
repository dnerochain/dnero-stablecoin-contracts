async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  //const Token = await ethers.getContractFactory("Token");
  //const token = await Token.deploy(
    //"Test Token",
    //"TT",
    //"1000000000000000000000000"
  //);

  //console.log("Token address:", token.address);

  const TetherToken = await ethers.getContractFactory("TetherToken");
  const tetherToken = await TetherToken.deploy();
  console.log("TetherToken address:", tetherToken.address);
  
  //const WDToken = await ethers.getContractFactory("WDToken");
  //const wDToken = await WDToken.deploy();
  //console.log("WDToken address:", wDToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
