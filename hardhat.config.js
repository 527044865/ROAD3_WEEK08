require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * 切记私钥不要上传到仓库 切记 切记
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    
    "optimism": {
       url: "https://opt-mainnet.g.alchemy.com/v2/iGqjOp7AJLYDuQpfuDs5gvwPC1QOOKVK",
       accounts: [ "d05577ed701d5f72c4254726fa853a08c9af2c1fad9cc985ab005a60526bcdef" ]
    }
  }
};