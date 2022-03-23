require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict prison sugar spot tower ring remember minor hockey process sun genius'; 
let testAccounts = [
"0xbfc264c40ba0d2826cb1d2fa0a2b07221898c9effdc350e24be132de51ec9a32",
"0x1d5d460d3917f43ef0b6a23fee6373d8a901e83dd0e18d87e1d64292366eec2e",
"0xe0de2b96747d880d65d56cfe2144ae507a2c6fcd3a5ff4b9c83992caef888c37",
"0x1155d6e8c4a4503a11afe0377b186339e1fc6467e573d829912d381c464c3d10",
"0xc9fac9069bb7e2975f90fe361aff19841492aa0f5a06ef2a67ed6e8e51244649",
"0x5c7e7428e87ea71c0c7cba23e3bc9c4b362b0cc095a4946514bc5ab8f7cc1b8e",
"0x41e7dffef8fe41ed73fa69caaed69c817fc3db92348dfea56a61c86fe3356278",
"0xb00115374088876845be2aa44dfebdd61d3a3a3e27348e09e19c7ccd290280a0",
"0xa4cca6ac0ffb0bc06389435fc76f9ed41871952b660e1333ec21370afa6c9f65",
"0x601a6b03240896e8bf5cf056d2aa1f6a72fc11b30c8c22e59be3218c6ad7e13b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


