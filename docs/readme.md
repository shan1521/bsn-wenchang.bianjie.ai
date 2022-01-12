---
{
    layout: Layout,
    isHome: true,
    title: BSN 文昌链,
    bsnTitleContent: [
        {
            img: bsn_banner_first,
            title: 文昌链,
            subTitle: 基于 IRITA 打造，首批在 BSN 环境上线的开放联盟链,
            icon: icon-doct,
            linkText: 技术文档,
            route: /wenchangchain
        },
        {
            img: bsn_banner_second,
            title: 文昌链浏览器,
            subTitle: 文昌链提供安全可信的商业区块链浏览器查询平台，帮助您可视化监控链上数据流动及状态，交易记录可信追溯，更加完整、公开的披露链上存储数据。,
            icon: icon-lianshangxinxi,
            linkText: 链上信息,
            link: https://explorer.wenchang.bianjie.ai
        },
    ],
    noticeContent: {
        title: 【文昌链升级公告】,
        honorific: 尊敬的用户，您好！,
        noticeList: [
            {
                paragraph: BSN「文昌链 IRITA OPB」于 2021 年 11 月 16 日已完成服务升级，本次升级实现了对 TIBC 精简跨链通信协议功能模块的适配集成，增强了跨链能力的可扩展性和交互能力，进一步支持 BSN 生态应用实现价值互联，为实体经济提供价值赋能。,
            },
            {
                paragraph: 感谢您对 BSN「文昌链 IRITA OPB」的支持！,
            },
            {
                paragraph: 如您有任何问题，可通过邮箱与我们联系：contact@bianjie.ai。,
            },
        ],
        welcome: 欢迎开发者们扫码加入技术交流社区：,
        qrCode: notice_qrcode.jpg,
        date: 2021 年 11 月 18 日
    },
    chainIntro: {
        chainIntroList: [
            {paragraph: 「文昌链」基于边界智能的企业级联盟链产品 IRITA 打造，并成为首批在 BSN 环境上线，具备全生态商业服务能力的开放联盟链。},
            {paragraph: 文昌链（基于 IRITA）以区块链跨链、隐私计算及大数据分析技术为核心，安全可控、符合国密标准，支持下一代分布式商业系统。目前已有识蛛可信身份服务、魔卡 NFT 管理平台、电子证照系统、一体化数字艺术品登记服务平台、建党百年送祝福微信小程序等多种行业应用在文昌链上线运营。},
            {paragraph: IRITA 拥有完善的 SDK （包括 NFT、大数据隐私保护、跨链服务调用等模块）及运维工具支持，在性能、安全可靠性、认证及权限、可维护性、可扩展性和运维监控等多方面都满足企业级应用需求，为实体经济提供基于区块链信任机器的价值赋能。},
        ]
    },
    coreFuncContent: {
        title: 核心功能,
        funcList: [
            {
                imgName: zichanshuzihua.png,
                funcName: 资产数字化建模,
                introList: [
                    {intro: 通过 NFT 的形式对有价值的数据资产和实体资产进行链上数字化建模，将其转化为区块链数字化资产并实现可信流转与交换，充分挖掘其未来价值。}
                ],
            },
            {
                imgName: iService.png,
                funcName: 面向服务-iService,
                introList: [
                    {intro: iService 提供了开发友好的微服务基础设施。支持链下服务从定义、绑定（服务提供方注册）、调用到治理的全生命周期管理。iService 可以非常方便地支持对传统商业系统的集成，实现多方协作，链上链下业务流高效集成。}
                ],
            },
            {
                imgName: zhinengheyue.png,
                funcName: 智能合约,
                introList: [
                    {intro: 智能合约是一种旨在以信息化方式传播、验证或执行合同的计算机协议，是对区块链功能的一种可定制化的扩展。文昌链目前支持的智能合约语言是 Rust。}
                ],
            },
            {
                imgName: cunzheng.png,
                funcName: 存证,
                introList: [
                    {intro: 将任何链外数据可信地映射在文昌链（IRITA OPB）上，作为对原始数据的证明。其可信性是通过密码学算法与区块链的安全性来保证的。}
                ],
            },
            {
                imgName: tibc.png,
                funcName: 跨链协议-TIBC,
                introList: [
                    {intro: TIBC（精简跨链通信协议）可降低同构链和异构链的跨链对接复杂度，更易于跨链能力的扩展，以支持跨链 NFT、跨链智能合约、跨链服务等应用的跨链互操作。}
                ],
            },
            {
                imgName: yinsijisuan.png,
                funcName: 隐私计算,
                introList: [
                    {intro: 支持数据多层次高效安全加密存储，通过多种隐私计算方法，保护各方数据所有权和隐私，支持多方协作时原始数据不出门 ，实现数据可用不可见的价值流通}
                ],
            },
            {
                imgName: quzhongxinhua.png,
                funcName: 去中心化身份体系,
                introList: [
                    {intro: 实现并扩展了 W3C DID 规范 ，提供分布式数字身份的创建、更新、查询、验证和管理等一整套功能，实现更规范化地管理和保护实体数据隐私及授权，同时保证信息流转的真实性和效率。}
                ],
            },
            {
                imgName: lianshangzhili.png,
                funcName: 链上治理,
                introList: [
                    {intro: 联盟链成员能够基于文昌链（IRITA OPB）平台进行公平、透明以及可追溯的可信交互与业务协作，共同参与链上治理。}
                ],
            },
        ]
    },
    aboutBSN: {
        title: 关于 BSN,
        aboutList: [
            {paragraph: 区块链服务网络（Blockchain-based Service Network）（简称 “BSN”）是一个跨云服务、跨门户、跨底层框架，用于部署和运行区块链应用的全球性公共基础设施网络，由国家信息中心、中国移动通信集团公司、中国银联股份有限公司、北京红枣科技有限公司共同发起。},
            {paragraph: BSN 致力于改变目前区块链应用开发和部署的高成本问题，以互联网理念为开发者提供公共区块链资源环境，极大降低区块链应用的开发、部署、运维、互通和监管成本，从而使区块链技术得到快速普及和发展。},
            {paragraph: BSN 由遍布全球的公共城市节点组成。在公共城市节点上，应用发布方和使用方可以使用统一身份证书发布、管理和加入不限数量的区块链应用，不再需要建设独立的区块链运行环境。},
        ]
    },
}
---
