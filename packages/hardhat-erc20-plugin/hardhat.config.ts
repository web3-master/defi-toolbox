import '@nomiclabs/hardhat-ethers';

module.exports = {
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  mocha: {
    timeout: 600000,
  },
  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};