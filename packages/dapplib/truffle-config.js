require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth script artwork idea clog tail gate'; 
let testAccounts = [
"0x6eeb4ffed13b6c2a4e016345f2008f2a5a8548a022e0c10bf3ef71e3b9dee09b",
"0x7cb8087d961aa5a19de10479e248c67c5cb5dbbb95a7a02a25d42210c1e7a59f",
"0x341154abbf674199fef3bf44e7a77d0454cb61fff8ab9b56a517c7f605a11905",
"0x5b559d17f8d99ce2d0595927d657a2310005d473360284e2c0702da846953e73",
"0x5dfbf79d1355b69894ea7e3f8b8b89f8b09cdfef18708fed5536767da2f5eadd",
"0x769efee612aa9877f5a8a0edb2407d22bb1130537f685ae85bcd27cf1e275ecf",
"0xe682ca2c6aa48f9967a9f99b82916ce7a890ffd5533a54f5ddacd36b903c678b",
"0x7df4182a06772361fd376d0ae606739d9b10eeeff3f89d8c70e09a4e9a1c6fce",
"0xd9d374bc9dbbf2efc6814b4f87486ecab0f25c1cf8dabbb373e89bf9713fb323",
"0x9e1497ab95c013c5417e325e8d787a0fe37a5f0885cb36fce3baf4a68af738b1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


