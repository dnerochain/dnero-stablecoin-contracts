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

  const TransparentUpgradeableProxy = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const transparentUpgradeableProxy = await TransparentUpgradeableProxy.deploy("0xe9Cf36DbCd7CCB9acac09AC3E9Bca78F78c921Ae","0x0258E111950828798Cb7D6528207ca08990E83C9","0x1624f6c6000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000b546574686572546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000045553445400000000000000000000000000000000000000000000000000000000");
  console.log("TransparentUpgradeableProxy address:", transparentUpgradeableProxy.address);
  
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
