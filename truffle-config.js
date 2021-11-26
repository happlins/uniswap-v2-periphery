const HDWalletProvider = require('@truffle/hdwallet-provider');
/*
const privateKeys = ["1234123aa...","abasdfasdf.."]
 */
const privateKey = "adfasdfasdfa..."

module.exports = {

  networks: {
    networks: {
      development: {
        provider: ()=>new HDWalletProvider(privateKey, `https://rpc.bhpnet.io`),
        network_id: "999",       // Any network (default: none)
        gas:8000000,
        gasPrice: 20000000000,
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 999999
       },
       evmVersion: "istanbul"
      }
    }
  }
};
