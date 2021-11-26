const uniswapV2Router02 = artifacts.require("UniswapV2Router02");

// 工程合约地址
const factory = ""
// weth合约地址
const weth = ""

module.exports = function (deployer) {
    deployer.deploy(uniswapV2Router02,factory,weth);
};
