
const CryptoPayment = artifacts.require("CryptoPayment");



const techCAddress = "0xAA26F0Da9BcFf2A09f48aC47D751c234A953b072";


module.exports = function (deployer) {
  deployer.deploy(CryptoPayment, techCAddress);
};