require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.1",
      },
      { version: "0.8.0", settings: {} },
    ],
    overrides: {
     
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url:
          "https://eth-mainnet.alchemyapi.io/v2/eOqKsGAdsiNLCVm846Vgb-6yY3jlcNEo",
        blockNumber: 12515000,
        // gas: 2000000000000000000000,
        // gasLimit: 2000000000000000000000,
        // blockGasLimit: 0x1fffffffffffff,
        // 
      },
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 800,
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};
