require('dotenv').config()
require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-etherscan");
require("hardhat-abi-exporter");
//require("hardhat-docgen");
const fs = require("fs");

//const etherscanApiKey = getEtherscanApiKey();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      //evmVersion: 'paris'
    },
  },
  paths: {
    //sources: "./src1/contracts", // 1st start TetherToken Contract Address Needed
    //sources: "./src2/contracts", // 2nd ProxyAdmin Contract Address Needed
    sources: "./src3/contracts", // 3rd TransparentUpgradeableProxy Need TetherToken and ProxyAmin Contract Addresses
    cache: "./cache_hardhat", // Use a different cache for Hardhat than Foundry
  },
  networks: {
    truffledashboard: dashboardNetworkConfig(),
    dneromainnet: mainnetNetworkConfig(),
    goerli: goerliNetworkConfig(),
  },
  abiExporter: {
    path: "./build/abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
};

function dashboardNetworkConfig() {
  let url = "http://localhost:24012/rpc";
  if (process.env.DASHBOARD_ENDPOINT) {
    url = `${process.env.DASHBOARD_ENDPOINT}`;
  }

  return {
    url: url,
    //accounts: [accountPrivateKey],
  };
}

function mainnetNetworkConfig() {
  let url = "https://eth-rpc-api.dnerochain.xyz/rpc";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.MAINNET_ENDPOINT) {
    url = `${process.env.MAINNET_ENDPOINT}`;
  }

  if (process.env.MAINNET_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.MAINNET_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

function goerliNetworkConfig() {
  let url = "https://goerli.infura.io/v3/";
  let accountPrivateKey =
    "0x0000000000000000000000000000000000000000000000000000000000000000";
  if (process.env.GOERLI_ENDPOINT) {
    url = `${process.env.GOERLI_ENDPOINT}`;
  }

  if (process.env.GOERLI_PRIVATE_KEY) {
    accountPrivateKey = `${process.env.GOERLI_PRIVATE_KEY}`;
  }

  return {
    url: url,
    accounts: [accountPrivateKey],
  };
}

//function getEtherscanApiKey() {
  //let apiKey = "";
  //if (process.env.ETHERSCAN_API_KEY) {
    //apiKey = `${process.env.ETHERSCAN_API_KEY}`;
  //}
  //return apiKey;
//}
