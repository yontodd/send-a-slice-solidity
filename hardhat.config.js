require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/xKuXBkqKOoO5Cbcxf3EmXR7bpmP61xHQ",
      accounts: process.env.PRIVATE_KEY,
    },
  },
};