# <font size="6">文昌链开发配置文档</font>

<br>

## 一、SDK：

- SDK-GO 地址：[https://github.com/bianjieai/opb-sdk-go](https://github.com/bianjieai/opb-sdk-go)
- SDK-Java 地址：[https://github.com/bianjieai/opb-sdk-java](https://github.com/bianjieai/opb-sdk-java)

## 二、开发环境

1、BSN

BSN 文昌链注册及账户创建的文档：

- 注册： [https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html)
- 链账户的创建： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html) （注意托管账户和非托管账户的区别及使用）
- 项目的创建及接入参数的下载： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html)
- 网关接入说明： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html)

2、IRITA测试网

初始化SKD配置：

```javascript
Chain-ID：testing
RPC：47.100.192.234:26657
gRPC：47.100.192.234:9090
```

## 三、链信息和区块、交易查询

文昌链区块链浏览器暂未开放，链信息、区块和交易查询可参照如下方式：

初始化 client 成功后，再调用 BaseClient 可以查询到。

## 四、NFT 技术文档

NFT 模块简介：

[https://irita.bianjie.ai/docs/core_modules/nft.html](https://irita.bianjie.ai/docs/core_modules/nft.html)

NFT 开发步骤：

[https://irita.bianjie.ai/docs/quick_start/nft.html](https://irita.bianjie.ai/docs/quick_start/nft.html)

链上NFT管理示例：

[https://irita.bianjie.ai/docs/console/modules/nft.html](https://irita.bianjie.ai/docs/console/modules/nft.html)

## 五、链上随机数

### PRNG

我们通过区块链生成的多个指标作为“因子”来计算随机数，使得此随机数公开透明，方便验证。

随机数“因子”具体包含以下指标：

- **上一个区块的 Hash：** 区块 Hash 的生成，取决于该区块的多方面因素，比如区块高度、交易数量、时间戳等等，因此区块 Hash 本身就具有一定的不可预测性。
- **当前区块的时间戳：** 区块时间戳采用 BFT 时间，即根据验证人的权重，使用上一个区块中每一个 Precommit 的时间，加权计算出来的分布式时间戳（毫秒级别），也具有一定的不可预测性 [[BFT Time]](https://docs.tendermint.com/master/spec/consensus/bft-time.html#bft-time)。
- **请求随机数的账户地址：** 主要是为了实现不同人在同一个区块高度得到不同的随机数。

由于区块 Hash 和 BFT 时间的计算都是基于上一个区块的信息，为了避免请求随机数之前可以预先计算结果，所以另一方面，我们通过“未来区块”，加强随机数的不可预测性。

#### 计算公式

```sh
seed = sha256(
    Int(timestamp)
    + Int(sha256(blockhash)) / Int(timestamp)
    + Int(sha256(consumer)) / Int(timestamp)
)

rand = seed mod 10^20 / 10^20
```

访问链接：

[https://irita.bianjie.ai/docs/core_modules/random.html](https://irita.bianjie.ai/docs/core_modules/random.html)

[https://irita.bianjie.ai/docs/console/modules/random.html](https://irita.bianjie.ai/docs/console/modules/random.html)