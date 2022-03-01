
# NFT 如何结合 DCI

- [NFT 如何结合 DCI](#nft------dci)
  * [一、DCI 是什么](#--dci----)
  * [二、对一个NFT进行版权申请](#-----nft------)
  * [三、整体说明](#------)
    + [3.1 前置条件](#31-----)
    + [3.2 登记 dci 整体思路](#32----dci-----)
    + [3.3 验证 dci code 及作品是否被篡改的思路](#33----dci-code------------)
  * [四、演示DEMO](#----demo)
    + [4.1 创建测试使用的 dci denom 和 nft](#41---------dci-denom---nft)
    + [4.2 准备 meta_data 内容](#42----meta-data---)
    + [4.3 使用 service 调用 dci 登记服务](#43----service----dci-----)
    + [4.4 通过 workId 查询 dci_code 修改 meta_data](#44----workid----dci-code----meta-data)
    + [4.5 通过 workId 查询登记成功详情](#45----workid---------)
  * [五、一些补充以及问题解答](#------------)
    + [5.1 meta_data 是在链外么？怎么能保证 meta_data 和 dci 做了关联？](#51-meta-data-------------meta-data---dci------)
    + [5.2 拿到 dci 的code码之后怎么更新 nft？](#52----dci--code--------nft-)
    + [5.3 我要去申请dci，meta_data要有哪些内容？](#53------dci-meta-data-------)
    + [5.4 一些报错问题归总](#54---------)

## 一、DCI 是什么

DCI：Digital Copyright Identifier，数字版权唯一标识符。是中国版权保护中心为更好地在数字网络化环境下提供版权公共服务提出的创新服务体系

## 二、对一个NFT进行版权申请

首先有一个NFT，接着对这个NFT 进行版权申请。并调用 dci 服务对该nft进行确权，dci服务会返回 dcicode 码，并将 dcicode 码更新到该nft。

## 三、整体说明

### 3.1 前置条件

- 调用 dci 接口申请一个 app_id，该app_id做鉴权使用

- 调用 dci 接口创建一个用户，成为了用户才能调后续 dci 接口

- 通过前两步的 app_id 和 用户id 订阅 dci 登记服务，只有订阅了dci登记服务，才能调用 dci 登记、查询、销毁接口

### 3.2 登记 dci 整体思路

1. 在 nft metadata 中添加 dci 服务需要的请求参数
2. 请求 dci 登记服务，得到 dci code 和 workId
3. 将 dci code 和 workId 更新到 nft metadata 中

### 3.3 验证 dci code 及作品是否被篡改的思路

1. 通过 nft id 获得 metadata 中的 workId
2. 通过 workId 请求查询登记信息
3. 通过对比 metadata 中的属性与查询到的登记信息，可以验证作品属性是否一致
4. 通过查询出的作品指纹，与下载原文件后本地计算的作品指纹进行对比，可以得出作品(图片，视频或音频)是否被修改

## 四、演示DEMO

## 4.1 创建测试使用的 dci denom 和 nft


java 代码如下（以下代码省略了client创建等，token配置等信息，如有需要可参考 [opb-sdk-java](https://github.com/bianjieai/opb-sdk-java)

```java
@Test
public void createNft() throws Exception {
    NftClient nftClient = getIritaClient().getNftClient();
    String denomID = "testdenomdci";
    String denomName = "测试dci的denom";
    String schema = "noshcema";
 
    IssueDenomRequest req = new IssueDenomRequest()
            .setId(denomID)
            .setName(denomName)
            .setSchema(schema);
    ResultTx resultTx = nftClient.issueDenom(req, baseTx);
    assertNotNull(resultTx.getResult().getHash());
 
    QueryDenomResp denom = nftClient.queryDenom(denomID);
    assertEquals(denomID, denom.getId());
    assertEquals(denomName, denom.getName());
    assertEquals(schema, denom.getSchema());
 
 
    String nftID = "testdcinft01";
    String nftName = "测试dci服务nft01";
    String uri = "test-dic-nft.com/testdcinft01";
    String data = "";
 
    MintNFTRequest mintReq = new MintNFTRequest()
            .setDenom(denomID)
            .setId(nftID)
            .setName(nftName)
            .setUri(uri)
            .setData(data)
            .setRecipient(clientConfig.getAddr());
    resultTx = nftClient.mintNft(mintReq, baseTx);
}
```

## 4.2 准备 meta_data 内容

什么是 meta_data ？ meta_data：元数据，现在主流的区块链网络如ETH会将 NFT 的基础数据放入 NFT 的 URI 中减少链上的存储。因此 uri 的内容就叫 meta_data

为什么需要这些内容，因为申请 dci 服务的接口需要这些参数，详见 dci接口文档.pdf

注意这里在申请的时候为了可以追溯，需要让 nft_id 和 srcWorkId（原始id） 相等

下方json使用了 dci 对象包裹要登记的信息


json对象结构说明

```json
{
    "dci": {
        "info": "对象，申请dci必填信息",
        "code": "dci登记成功返回的 code 码"
        "workId": "dci登记后返回的工作id，用来查询"
    }
}
```

json对象示例

```json
{
    "dci": {
        "info": {
            "appId": "1492800708716584961",
            "authorName": "叶青青",
            "authorSignature": "雨女",
            "creationCompletionDate": "2022-02-10",
            "creationCompletionPlace": "上海市",
            "firstPublicationDate": "2022-02-10",
            "firstPublicationPlace": "上海市",
            "mattersEntrusted": "默认用户委托平台提交申请",
            "ownershipWay": 1,
            "preRegUserApplyConfirmTime": "2022-02-10 15:20:00",
            "preRegistrationTrueWill": 4,
            "publicationStatus": 1,
            "rightObtainWay": 1,
            "rightScope": "0",
            "srcUserId": "1480467047681839106",
            "srcWorkId": "testdcinft01",
            "userId": "1480467047681839106",
            "workCategory": 1,
            "workCreationNature": 11,
            "workDownloadLink": "http://39.97.248.48/media/1001.jpeg",
            "workFingerPrint": "8131F9BB91269515B052946FEE24AC443E63FFF47FC51FCE9E2DA93BA6682B77",
            "workName": "雨女绘画图01"
        }
    }
}
```

这里需要的作品指纹怎么算？

- 使用文件验证工具
- 使用代码做 ToUpperCase(hex(sha256(文件))) 运算

## 4.3 使用 service 调用 dci 登记服务

```java
    String serviceName = DCIIServiceDefinitionEnum.WORKS_REGISTRATION.getCode();
    IritaClient iritaClient = getIritaClient();
    IServiceCallBackDTO<IritaWorksRegistrationDTO> dto = IServiceCallBackDTO.build(new IServiceCallBackBody<>(buildDTO()));
    //服务调用
    List<String> providers = new ArrayList<>();
    providers.add(clientConfig.getAddr());
    //2个参数：param1,param2
    String input = JsonUtil.toJson(dto);
    System.out.println(input);
    //String input = "{\"header\":{},\"body\":{\"param1\":\"hello\",    \"param2\":\"world\"}}";
    Coin serviceFeeCap = new Coin("upoint", "10000");
    long timeout = 50;
    boolean repeated = false;
    long repeatedFrequency = 0;
    long repeatedTotal = 0;
    CallServiceRequest callServiceRequest = new CallServiceRequest()
            .setServiceName(serviceName)
            .setProviders(providers)
            .setInput(input)
            .setServiceFeeCap(serviceFeeCap)
            .setTimeout(timeout)
            .setRepeated(repeated)
            .setRepeatedFrequency(repeatedFrequency)
            .setRepeatedTotal(repeatedTotal);
    CallServiceResp callServiceResp = iritaClient.getServiceClient().callService    (callServiceRequest, baseTx, new InvokeCallback() {
        @Override
        public void accept(String reqCtxID, String reqID, String output) {
            System.out.println(output);
        }
    });
    asse    rtNotNull(callServiceResp);
    System.out.println(callServiceResp.getReqCtxId());
    String requestId = callServiceResp.getReqCtxId();
    System.out.println(callServiceResp.getResultTx().getResult().getHash());
 
    TimeUnit.MINUTES.sleep(2);
```

这里需要注意一些问题

1. 首先登记的链接要在 dci 服务端配置的白名单下，http://39.97.248.48/media/irita1.jpeg 例如该地址在白名单下，否则会报 uri 不合法
2. 如果该uri已经登记过，再次登记会失效
3. dci接口也会验证作品指纹是否配对，作品指纹 =  ToUpperCase(hex(sha256(文件)))
4. 作者姓名与实名信息不符，就是说之前你这个用户之前一定要实名的才能登记成功
5. dci服务端会使用大数据分析技术，如果该作品和之前登记的作品内容高度重合，不会通过校验

## 4.4 通过 workId 查询 dci_code 修改 meta_data


```json
{
    "body": {
        "data": {
            "code": "0",
            "data": "{\"dciCode\":\"DCI:RDCI000HW1.20220215D52B1543F4\",\"srcWorkId\":\"irita1\",\"status\":1,\"workId\":\"1493594441095729153\"}",
            "message": "SUCCESS"
        }
    },
    "header": {}
}
```

## 4.5 通过 workId 查询登记成功详情

```java
    @Test
    public void testeGetWorksRegistrationDetailCall() throws Exception {
        String serviceName = DCIIServiceDefinitionEnum.WORKS_REGISTRATION_DETAIL_GET.getCode();
        IritaClient iritaClient = getIritaClient();
        IServiceCallBackDTO<IritaWorksRegistrationGetDTO> dto = IServiceCallBackDTO.build(new IServiceCallBackBody<>(buildDTO()));
        //服务调用
        List<String> providers = new ArrayList<>();
        providers.add(clientConfig.getAddr());
        //2个参数：param1,param2
        String input = JsonUtil.toJson(dto);
        System.out.println(input);
        long timeout = 50;
        boolean repeated = false;
        long repeatedFrequency = 0;
        long repeatedTotal = 0;
        CallServiceRequest callServiceRequest = new CallServiceRequest()
                .setServiceName(serviceName)
                .setProviders(providers)
                .setInput(input)
                .setServiceFeeCap(serviceFeeCap)
                .setTimeout(timeout)
                .setRepeated(repeated)
                .setRepeatedFrequency(repeatedFrequency)
                .setRepeatedTotal(repeatedTotal);
        CallServiceResp callServiceResp = iritaClient.getServiceClient().callService(callServiceRequest, baseTx, new InvokeCallback() {
            @Override
            public void accept(String reqCtxID, String reqID, String output) {
                System.out.println(output);
            }
        });
        assertNotNull(callServiceResp);
        System.out.println(callServiceResp.getReqCtxId());
        String requestId = callServiceResp.getReqCtxId();
        System.out.println(callServiceResp.getResultTx().getResult().getHash());
        TimeUnit.MINUTES.sleep(2);
    }

    private IritaWorksRegistrationGetDTO buildDTO() {
        IritaWorksRegistrationGetDTO dto = new IritaWorksRegistrationGetDTO();
        dto.setAppId("1492800708716584961");
        dto.setUserId("1480467047681839106");
        dto.setWorkId("1493594441095729153");
        return dto;
    }
```

响应结果：json 结构

```json
{
    "body": {
        "data": {
            "code": "0",
            "data": "{\"appId\":\"65905016\",\"authorName\":\"security:30F5E0BCD8FCF8422537EA99:09BF66533751172BCA8448F1CE2C60E094D2E9320BEDC19FF3\",\"authorSignature\":\"security:D798E86842595A01212BCD6C:EE32282C547982AF2A385AA4FB1F35B5810B069F7AFD\",\"creationCompletionDate\":\"2021-12-10\",\"creationCompletionPlace\":\"北京市\",\"dciCode\":\"DCI:RDCI000HW1.20220215D52B1543F4\",\"dciObtainTime\":\"2022-02-15 22:35:23\",\"firstPublicationDate\":\"2021-12-10\",\"firstPublicationPlace\":\"北京市\",\"mattersEntrusted\":\"默认用户委托平台提交申请\",\"originalStatement\":\"\",\"ownershipWay\":1,\"preRegistrationTrueWill\":4,\"publicationStatus\":1,\"registrationCompletionDate\":\"2022-02-15 22:35:23\",\"registrationStatus\":0,\"rightObtainWay\":1,\"rightScope\":\"0\",\"userId\":\"1480467047681839106\",\"workCategory\":11,\"workCreationNature\":1,\"workDownloadLink\":\"https://obs-dcipub-drcn.obs.cn-south-1.myhuaweicloud.com/obs_dci_server_work_sample/20220215223529/5DF08279931D819C281205597C6F893B.jpg\",\"workFingerPrint\":\"ED43B1E4D199DDB41B5B5BE4B1EAE50FB819AE0328CD7C92BD14FD23DAC845E5\",\"workId\":\"1493594441095729153\",\"workInstructions\":\"\",\"workName\":\"我的随拍Irita1\"}",
            "message": "SUCCESS"
        }
    },
    "header": {}
}
```

## 五、一些补充以及问题解答

### 5.1 meta_data 是在链外么？怎么能保证 meta_data 和 dci 做了关联？

答：是在链外！ dci登记接口需要传入作品指纹（作品指纹：1、长度不能超过64个字符。2、使用SHA256签名验证完整性。图片作品的指纹为图片内容的HexHash256），作品的原文件可以从作品的下载链接中获取

- 通过作品指纹可以知道，作品内容是否被篡改
- 通过 workId，srcWorkId/nftId 查询可知作品基本属性是否被篡改

### 5.2 拿到 dci 的code码之后怎么更新 nft？

答：客户端手动去触发更新，当申请dci成功，并通过查询拿到 dci_code 时，客户端手动更新自己的 meta_data 结构

### 5.3 我要去申请dci，meta_data要有哪些内容？

答：首先一定要有的是dci登记接口中的必填参数是要有的（当然可以省略一些公共参数，如appId，平台Id，用户ID 等通用字段，这些字段由自己的服务端维护，这里为了演示方便直接所有参数直接放在了 uri 里）

### 5.4 一些报错问题归总

答：因为 nft 链接里放的是图片，所以作品类型必须设置为 11。否则虽然登记的时候成功，但是查询登记状态会报上面错误（作品类别：1：摄影作品,2：美术作品,3：文字作品,4：音乐作品,5：视听作品,6：口述作品,7：戏剧作品, 8：曲艺作品,9：舞蹈作品,10：杂技作品,11：图形作品和模型作品,12：汇编作品,13：多媒体汇编作品,14：其他）