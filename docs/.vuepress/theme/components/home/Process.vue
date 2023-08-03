<template>
    <div class="process_container">
        <div class="process_content_container">
            <div class="process_content">
                <div class="title">文昌链接入流程</div>
                <div class="process_list">
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/home/step_first.png" alt="" />
                        </div>
                        <p class="step_process">注册账号，完成认证</p>
                        <p class="step_desc">登录<a style="color: #7065FF;" href="https://console.avata.bianjie.ai/" target="_blank" rel="noopener noreferrer">Avata 服务平台</a></p>
                        <p class="step_desc_second">注册账号，并进行 KYC 认证</p>
                    </div>
                    <div class="step_jiantou">
                        <img src="../../assets/home/jiantou_icon.png" alt="" />
                    </div>
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/home/step_second.png" alt="" />
                        </div>
                        <p class="step_process">获取项目参数</p>
                        <p class="step_desc">创建或提交项目资料</p>
                        <p class="step_desc_second">获取 Avata API 服务的项目参数</p>
                    </div>
                    <div class="step_jiantou">
                        <img src="../../assets/home/jiantou_icon.png" alt="" />
                    </div>
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/home/step_third.png" alt="" />
                        </div>
                        <p class="step_process">服务接口调用</p>
                        <p class="step_desc"><a style="color: #7065FF;" href="https://docs.avata.bianjie.ai/?nav=01H5AGKE8G618YTW6NMEND4NX5" target="_blank" rel="noopener noreferrer">Avata API 服务接口</a>对接</p>
                        <p class="step_desc_second">链接分布式业务系统，进行上链</p>
                    </div>
                    <div class="step_jiantou">
                        <img src="../../assets/home/jiantou_icon.png" alt="" />
                    </div>
                    <div class="process_step">
                        <div class="step_img">
                            <img src="../../assets/home/step_forth.png" alt="" />
                        </div>
                        <p class="step_process">上链记录查询</p>
                        <p class="step_desc">上链记录查询</p>
                        <p class="step_desc_second">通过<a style="color: #7065FF;" href="https://explorer.wenchang.bianjie.ai/" target="_blank" rel="noopener noreferrer">文昌链浏览器</a>，查看上链信息</p>
                    </div>
                </div>
                <p class="tip">如果您想通过 SDK 的方式，来接入并使用文昌链，请参考 <a style="color: #7065FF;" href="https://docs.avata.bianjie.ai/?nav=01H5AGMQES6HJ1TD50QMH8N4BJ" target="_blank" rel="noopener noreferrer">技术文档</a> 中文昌链 SDK 服务对接流程</p>
                <div class="control">
                    <a class="control_text" href="https://console.avata.bianjie.ai/" target="_blank" rel="noopener noreferrer">前往控制台 <i class="iconfont icon-turnto"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Process'
}
</script>

<style lang="stylus">
.process_container {
    width: 100%;
    .process_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .process_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0;
            max-width: 107rem;
            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight600;
                color: #000000;
                line-height: 2.4rem;
                text-align: center;
            }
            .process_list {
                display: flex;
                justify-content: center;
                margin-top: 4rem;
                @media (max-width: 1080px) {
                    padding-left: 3.2rem;
                    padding-right: 3.2rem;
                }
                @media (max-width: 994px) {
                    padding-left: 0.8rem;
                    padding-right: 0.8rem;
                }
                @media (max-width: 947px) {
                    flex-direction: column;
                    align-items: center;
                }
                .process_step {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    max-width: 24rem;
                    @media (max-width: 947px) {
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
                        margin-top: 1.6rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
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
                    .step_desc_second {
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
                    @media (max-width: 947px) {
                        transform: rotate(90deg);
                    }
                    img {
                        width: 100%;
                    }
                }
            }
            .tip {
                margin-top: 6rem;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: rgba(0, 0, 0, 0.75);
                line-height: 24px;
                text-align: center;
                @media (max-width: 768px) {
                    box-sizing: border-box;
                    padding: 0 4.8rem;
                }
                @media (max-width: 400px) {
                    padding: 0 1.6rem;
                }
            }
            .control {
                margin-top: 4.8rem;
                font-size: $fontSize16;
                font-weight: $fontWeight400;
                line-height: 1.6rem;
                text-align: center;
                .control_text {
                    color: $highlightDetailColor;
                    .iconfont {
                        display: inline-block;
                        margin-left: 0.8rem;
                        font-size: $fontSize16;
                        color: $highlightDetailColor;
                    }
                }
            }
        }
    }
}

</style>