# uniswap v2 periphery 部署

>部署当前项目前，你需要部署[uniswap-v2-core](https://github.com/happlins/uniswap-v2-core)项目

## 安装依赖

```shell
> npm install -g truffle
> npm install -g yarn
> yarn
```

## 编译

> 将你部署`uniswap-v2-core`得到的*initCode*修改到以下位置的hex(请注意取消前面的0x)
```solidity
// calculates the CREATE2 address for a pair without making any external calls
function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {
    (address token0, address token1) = sortTokens(tokenA, tokenB);
     pair = address(uint(keccak256(abi.encodePacked(
            hex'ff',
            factory,
            keccak256(abi.encodePacked(token0, token1)),
            hex'96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f' // 你需要修改的地方 
       ))));
}
```

`yarn compile`

## 部署

修改[truffle-config.js](./truffle-config.js)文件中的以下部分

```js
//  如果你有多个地址，可以打开下面的注释,并修改HDWalletProvider中的privateKey为privateKeys
// const privateKeys = ["1234123aa...","abasdfasdf.."]
const privateKey = "adfasdfasdfa..."

module.exports = {
  networks: {
    development: {
     provider: ()=>new HDWalletProvider(privateKey, `https://rpc.bhpnet.io`),
     network_id: "999",       // Any network (default: none)
     gas:8000000, // gasLimit
     gasPrice: 20000000000, // 20gwei
     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
};
```

修改部署文件[deploy](./migrations/2_deploy_router.js)

- `factory`: 部署的factory合约地址
- `weth`: 当前网络的weth合约地址

最后执行
`yarn deploy`