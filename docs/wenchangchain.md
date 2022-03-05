# <font size="6">文昌链开发者文档</font>

</br>

## 文昌链 API 文档
</br>

#### 一、文昌链 API 服务开发者文档链接：[http://apis.avata.bianjie.ai](http://apis.avata.bianjie.ai)

#### 二、文昌链 API 服务对接流程

第一步：联系边界智能商务人员（联系邮箱：dude@bianjie.ai），获取您的接口服务调用参数 （Project ID、API Key、API Secret）

- 1.1 通过邮箱获取并提交 KYC 认证资料
- 1.2 审核通过后进行授权并发放接口服务调用参数至您的邮箱地址

第二步：获取 API Key 和 API Secret 后，参照接口文档说明，在进行相关接口服务调用时，使用 API Key 和 API Secret 作为与接口服务网关进行通信的凭证

第三步：调用创建链账户接口，创建您的专属链账户地址。
    
第四步：链账户创建成功后，联系边界智能的商务人员（联系邮箱：dude@bianjie.ai）,充值链上通信所需的能量值

第五步：根据您的业务需求，查看并调用对应的接口与区块链进行交互
    
#### 三、文昌链 API 服务调用说明

- 请求路径：  
  文档中所有API 均只给出 Path Url 部分，请求时请加上访问域名：http://apis.avata.bianjie.ai/
- HTTP 请求说明：  
  HTTP 请求只有获得 API Key 和 API Secret 的用户才可以调用。API Key 用于网关鉴权，API Secret 用于接口服务调用签名。

    </br>


## 文昌链 SDK 文档
</br>

#### 一、文昌链 SDK 文档链接：
- SDK-Java 地址：[https://github.com/bianjieai/opb-sdk-java](https://github.com/bianjieai/opb-sdk-java)
- SDK-Go 地址：[https://github.com/bianjieai/opb-sdk-go](https://github.com/bianjieai/opb-sdk-go)   （[说明文档](https://irita.bianjie.ai/docs/SDK/Go_SDK/overview.html) ）

#### 二、文昌链 SDK 服务对接流程
第一步：注册账号
- 注册账号：[https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html)
- 链账户的创建：[https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html)（注意托管账户和非托管账户的区别及使用）

第二步：获取项目 ID 和项目 key
- 创建项目：[https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html)

第三步：配置测试及开发环境  
- 接入IRITA测试网

初始化SDK配置：
```javascript
Chain-ID：testing
RPC：47.100.192.234:26657
gRPC：47.100.192.234:9090
```
注：测试网没有网关接入要求，开发者可以根据业务需要先在测试网中进行相关应用接口的调试

- 接入文昌链（线上生产环境）

（1）下载文昌链的接入参数：[https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html)

（2）配置接入网关（初始化SDK配置）：

将下载下来的接入参数按照不同语言 SDK 的接入方式，根据接入网关地址的规则进行输入配置  

文昌链网关接入说明：[https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html)

```javascript
Chain-ID：wenchangchain
RPCAddr: https://opbningxia.bsngate.com:18602/api/[project_id]/rpc
wsAddr: wss://opbningxia.bsngate.com:18602/api/[project_id]/ws
gRPCAddr: opbningxia.bsngate.com:18603 
```
<br>

## NFT 技术文档
</br>

- NFT 技术模块简介：

[https://irita.bianjie.ai/docs/core_modules/nft.html](https://irita.bianjie.ai/docs/core_modules/nft.html)

- NFT 技术开发步骤：

[https://irita.bianjie.ai/docs/quick_start/nft.html](https://irita.bianjie.ai/docs/quick_start/nft.html)

- 链上资产（NFT）管理示例：

[https://irita.bianjie.ai/docs/console/modules/nft.html](https://irita.bianjie.ai/docs/console/modules/nft.html)

- NFT 技术 demo（Java版本）：

[https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/NftDemo.java](https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/NftDemo.java)

- 通过 NFT 技术批量发行链上资产：

[https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/MsgsDemo.java](https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/MsgsDemo.java)

<br>

## 文昌链浏览器
文昌链区块链浏览器已正式开放，链信息、区块信息和交易信息查询可访问以下链接：

[https://explorer.wenchang.bianjie.ai](https://explorer.wenchang.bianjie.ai)

<br>

## 链上随机数模块
</br>

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

#### 访问链接：

[https://irita.bianjie.ai/docs/core_modules/random.html](https://irita.bianjie.ai/docs/core_modules/random.html)

[https://irita.bianjie.ai/docs/console/modules/random.html](https://irita.bianjie.ai/docs/console/modules/random.html)

</br>

## iService 模块应用案例
</br>

[NFT 调用 DCI Service](https://github.com/bianjieai/bsn-wenchang.bianjie.ai/blob/master/docs/doc-application-case/nft-x-dciservice.md)

