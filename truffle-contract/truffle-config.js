var HDWalletProvider = require("truffle-hdwallet-provider");


const mnemonic = "require reunion adjust approve jazz matrix rice ill spread rapid noise bridge";
const token = '8aa3b24598144550aff111cabd28b5b4'

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${token}`),
      network_id: 4,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 1000000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${token}`),
      network_id: 5,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      networkCheckTimeout: 1000000000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
  },
};
