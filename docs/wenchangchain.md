# <font size="6">文昌链开发者文档</font>

<br>

## Avata-文昌链 API 文档
<br>

#### 一、Avata-文昌链 API 服务开发者文档链接：  
[https://apis.avata.bianjie.ai](https://apis.avata.bianjie.ai)

#### 二、Avata-文昌链 API 服务接入说明

第一步：申请并获取您的 Avata API 服务接入参数
- 1.1 注册并登录[ Avata 服务平台](https://console.avata.bianjie.ai)
- 1.2 进行您的 KYC 认证，包括实名认证和企业认证
- 1.3 等待认证审核结果（1-3个工作日），审核通过后以邮箱方式发放您专属的 Avata OPEN API 服务接入参数（请仔细保管，谨防丢失）

第二步：创建链账户地址
- 2.1 文昌链测试环境（请求接口需先指定域名：<font color="#7065FF">https://stage.apis.avata.bianjie.ai/</font>）   
（1）请求 <font color="#7065FF">创建链账户</font> 接口生成测试环境的链账户地址  
（2）测试环境生成的链账户地址中拥有足够的测试能量值，可满足应用对接测试和业务接口调试
- 2.2 文昌链正式环境（请求接口需先指定域名：<font color="#7065FF">https://apis.avata.bianjie.ai/</font>）  
（1）请求 [创建链账户](https://apis.avata.bianjie.ai/v1beta1/accounts) 接口生成正式环境的链账户地址  
（2）正式环境生成的链账户地址将用于应用对接上线，需要您进行资金账户充值以满足业务需要。  
请注意：当前 Avata 版本链账户生成即上链，会在底层链上产生一笔能量值费用（以文昌链为例，该费用约¥0.05）。建议应用方按照活跃会参与链交互的用户数进行链账户创建，避免提前花费没有必要的能量值费用。Avata 团队专注于为应用提供安全低成本高效的API服务，下一个版本将会推出链账户Lazy loading 版本，支持应用先链外生成链账户，当相关链账户发生第一笔链交易时才会在链上真正被激活并记录。

第三步：资金账户充值
- 3.1 充值说明：    
Avata 平台针对每个用户都提供专属的资金账户。链账户创建、服务调用、上链交易所产生的业务费和能量值消耗，都将从您的专属资金账户中支出。
- 3.2 充值方式：    
请联系 Avata 运营人员进行充值，联系邮箱：<font color="#7065FF">avata@bianjie.ai</font>

第四步：请求服务接口与区块链进行交互，实现业务对接。具体方法可查看 [Avata API 服务接口文档](http://apis.avata.bianjie.ai) 


<br>


## 文昌链 SDK 文档
<br>

#### 一、文昌链 SDK 文档链接：
- SDK-Java 地址：[https://github.com/bianjieai/opb-sdk-java](https://github.com/bianjieai/opb-sdk-java)
- SDK-Go 地址：[https://github.com/bianjieai/opb-sdk-go](https://github.com/bianjieai/opb-sdk-go)（[说明文档](https://irita.bianjie.ai/docs/SDK/Go_SDK/overview.html) ）

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
<br>

- NFT 技术模块简介：    
[https://irita.bianjie.ai/docs/core_modules/nft.html](https://irita.bianjie.ai/docs/core_modules/nft.html)
- NFT 技术开发步骤：    
[https://irita.bianjie.ai/docs/quick_start/nft.html](https://irita.bianjie.ai/docs/quick_start/nft.html)
- 链上资产（NFT）管理示例：     
[https://irita.bianjie.ai/docs/console/modules/nft.html](https://irita.bianjie.ai/docs/console/modules/nft.html)
- NFT 技术 demo（Java版本）：   
[https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/NftDemoTest.java](https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/NftDemoTest.java)
- 通过 NFT 技术批量发行链上资产：   
[https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/MsgsDemoTest.java](https://github.com/bianjieai/opb-sdk-java/blob/master/src/test/java/irita/sdk/MsgsDemoTest.java)

<br>

## 文昌链浏览器
<br>

文昌链区块链浏览器已正式开放，链信息、区块信息和交易信息查询可访问以下链接：

[https://explorer.wenchang.bianjie.ai](https://explorer.wenchang.bianjie.ai)

<br>

## 链上随机数模块
<br>

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

<br>

## iService 模块应用案例
<br>

[NFT 调用 DCI Service](https://github.com/bianjieai/bsn-wenchang.bianjie.ai/blob/master/docs/doc-application-case/nft-x-dciservice.md)

