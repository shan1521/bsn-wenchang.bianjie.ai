<template>
    <div class="bsnprocess_container">
        <div class="bsnprocess_content_container">
            <div class="bsnprocess_content">
                <div class="title">文昌链接入流程</div>
                <div class="process_list">
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/BSN/bsn_step_first.png" alt="" />
                        </div>
                        <div class="step_process">注册账号，开通体验</div>
                        <div class="step_desc">注册账号，登入 <a style="color: #7065FF;" href="https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html" target="_blank" rel="noopener noreferrer">BSN</a> 门户网站，注册并创建链账户，正式体验并使用开放联盟链</div>
                    </div>
                    <div class="step_jiantou">
                        <img
                            src="../../assets/BSN/jiantou_icon.png"
                            alt=""
                        />
                    </div>
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/BSN/bsn_step_second.png" alt="" />
                        </div>
                        <div class="step_process">配置开发环境</div>
                        <div class="step_desc">根据文昌链<router-link style="color: #7065FF;" to="/wenchangchain">开发配置文档</router-link>的介绍，配置对应的开发环境及测试网环境</div>
                    </div>
                    <div class="step_jiantou">
                        <img
                            src="../../assets/BSN/jiantou_icon.png"
                            alt=""
                        />
                    </div>
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/BSN/bsn_step_third.png" alt="" />
                        </div>
                        <div class="step_process">使用链上服务，接入应用</div>
                        <div class="step_desc">使用集成 <a style="color: #7065FF;" href="https://github.com/bianjieai/opb-sdk-go" target="_blank" rel="noopener noreferrer">SDK</a>，连接业务端系统和文昌链平台，创建服务、发布NFT及其他应用</div>
                    </div>
                </div>
                <div class="control" @click="tipFn">
                    <span class="control_text">前往控制台</span>
                    <i class="iconfont icon-turnto"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNProcess',
    methods: {
        tipFn(){
            this.$message({
                message: '暂未开放！',
                // type: 'warning'
            })
        }
    }
}
</script>

<style lang="stylus">
.bsnprocess_container {
    width: 100%;
    background: #F9FAFD;
    .bsnprocess_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .bsnprocess_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0;
            max-width: 96rem;
            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight500;
                color: #000000;
                line-height: 2.4rem;
                text-align: center;
            }
            .process_list {
                display: flex;
                justify-content: center;
                margin-top: 4rem;
                @media (max-width: 970px) {
                    padding-left: 3.2rem;
                    padding-right: 3.2rem;
                }
                @media (max-width: 716px) {
                    flex-direction: column;
                    align-items: center;
                }
                .process_step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 24rem;
                    @media (max-width: 716px) {
                        margin-top: 10rem;
                        &:first-child {
                            margin-top: 0;
                        }
                    }
                    .step_img {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 12rem;
                        height: 12rem;
                        background: #fff;
                        border-radius: 50%;
                        img {
                            width: 7.9rem;
                        }
                    }
                    .step_process {
                        margin-top: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight500;
                        color: #000000;
                        line-height: 2.4rem;
                        text-align: center;
                    }
                    .step_desc {
                        margin-top: 1.6rem;
                        font-size: $fontSize14;
                        font-weight: $fontWeight400;
                        color: rgba(0, 0, 0, 0.75);
                        line-height: 2.4rem;
                        text-align: center;
                    }
                }
                .step_jiantou {
                    position: relative;
                    top: 5rem;
                    max-width: 9.6rem;
                    color: $highlightDetailColor;
                    @media (max-width: 716px) {
                        transform: rotate(90deg);
                    }
                    img {
                        width: 100%;
                    }
                }
            }
            .control {
                margin-top: 4.8rem;
                font-size: $fontSize16;
                font-weight: $fontWeight400;
                color: $highlightDetailColor;
                line-height: 1.6rem;
                text-align: center;
                cursor: pointer;
                .iconfont {
                    display: inline-block;
                    margin-left: 0.8rem;
                    font-size: $fontSize16;
                }
            }
        }
    }
}

</style>