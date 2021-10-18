<template>
    <div class="footer_content_wrapper">
        <div class="footer_content_top">
            <div class="top_content">
                <div class="content">
                    <div class="content_left">
                        <div class="left_img">
                            <div class="bsn_logo_wrap" @click="toBSN">
                                <img
                                    src="../assets/bsn_logo.png"
                                    alt=""
                                    class="img"
                                />
                            </div>
                            <div class="logo_wrap" @click="toHome">
                                <img
                                    src="../assets/wenchang_logo_white.png"
                                    alt=""
                                    class="img"
                                />
                            </div>
                        </div>
                        <p class="img_desc">
                            文昌链基于 IRITA 打造，是首批在 BSN 环境上线的开放联盟链
                        </p>
                    </div>
                    <div class="content_right">
                        <div class="line"></div>
                        <div class="contact">
                            <span class="contact_title">联系我们</span>
                            <span class="email">contact@bianjie.ai</span>
                            <a
                                class="official"
                                href="https://www.bianjie.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                >www.bianjie.ai</a
                            >
                        </div>
                        <div class="focus">
                            <span class="focus_title">关注我们</span>
                            <span class="qr_code">
                                <img
                                    src="../assets/qrcode.png"
                                    alt=""
                                    class="qr_code_img"
                                />
                            </span>
                            <span class="desc">微信公众号 边界智能</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_content_bottom">
            <div class="bottom_content">
                <span class="copyright_content">{{
                    `版权所有©2016-${new Date().getFullYear()} 上海边界智能科技有限公司`
                }}</span>
                <a
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
                    target="_blank"
                    rel="noreferrer noopener"
                    >沪ICP备17020986号</a
                >
                <span class="police_content">
                    <a
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502009028"
                        target="_blank"
                        rel="noreferrer noopener"
                        >沪公网安备31011502009028号</a
                    >
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        toBSN() {
            window.open('https://www.bsnbase.com/');
        },
        toHome() {
            this.$router.push("/");
            this.$store.commit("currentIndex", 0);
        },
    }
};
</script>

<style lang="stylus">
.footer_content_wrapper {
    margin-top: 2rem;
    width: 100%;
    height: 37.4rem;
    flex: 0 0 37.4rem;

    @media (max-width: 768px) {
        margin-top: 0;
    }

    .footer_content_top {
        width: 100%;
        height: 31.4rem;
        background: $footerTopColor;

        @media (max-width: 768px) {
            height: auto;
        }
    }

    .top_content {
        margin: 0 auto;
        padding: 6rem 2.4rem;
        max-width: $footerTopContentWidth;
        height: 19.4rem;

        @media (max-width: 768px) {
            padding: 3.6rem 0;
            height: auto;
        }

        .content {
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            margin: 0 auto;
            width: 100%;
            height: 100%;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: center;
            }

            .content_left {
                .left_img {
                    display: flex;
                    align-items: center;
                    height: 6rem;

                    @media (max-width: 768px) {
                        display: flex;
                        justify-content: center;
                    }
                    .bsn_logo_wrap {
                        display: flex;
                        align-items: center;
                        height: 100%;
                        cursor: pointer;
                        &::after {
                            content: '';
                            display: block;
                            margin-left: 2rem;
                            margin-right: 2rem;
                            width: 0.2rem;
                            height: 80%;
                            background: #fff;
                            opacity: 0.25;
                        }
                        img {
                            height: 100%;
                        }
                    }
                    .logo_wrap {
                        height: 100%;
                        cursor: pointer;
                        img {
                            height: 100%;
                        }
                    }
                }

                .img_desc {
                    margin-top: 2.4rem;
                    line-height: 2.4rem;
                    font-size: $fontSize16;
                    font-weight: $fontWeight400;
                    color: $whiteColorOpacity1;
                    box-sizing: border-box;
                    padding-right: 1.6rem;

                    @media (max-width: 768px) {
                        padding-right: 0;
                        max-width: 22rem;
                        text-align: center;
                    }
                }
            }

            .content_right {
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                -webkit-justify-content: space-between;
                justify-content: space-between;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-top: 3.6rem;
                    text-align: center;
                }

                .line {
                    width: 0.1rem;
                    height: 19.5rem;
                    background: #515071;

                    @media (max-width: 768px) {
                        display: none;
                    }
                }

                .contact {
                    display: flex;
                    flex-direction: column;
                    -webkit-box-orient: vertical;
                    -ms-flex-direction: column;
                    -webkit-flex-direction: column;
                    margin: 0 8rem;

                    .contact_title {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $whiteColor;
                    }

                    .email {
                        margin: 2.4rem 0;
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;

                        &:hover {
                            color: $whiteColor;
                            cursor: pointer;
                        }
                    }

                    .official {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;

                        &:hover {
                            color: $whiteColor;
                        }
                    }
                }

                .focus {
                    display: flex;
                    flex-direction: column;

                    @media (max-width: 768px) {
                        margin-top: 4.4rem;
                    }

                    .focus_title {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: $whiteColor;
                    }

                    .qr_code {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 2.4rem 0 0.8rem;
                        width: 11.4rem;
                        height: 11.4rem;

                        .qr_code_img {
                            width: 11.4rem;
                            height: 11.4rem;
                            vertical-align: middle;
                        }
                    }

                    .desc {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        font-size: $fontSize12;
                        font-weight: $fontWeight400;
                        color: $whiteColorOpacity;
                    }
                }
            }
        }
    }

    .footer_content_bottom {
        width: 100%;
        height: 6rem;
        background: $footerBottomColor;
        @media (max-width 1200px) {
            box-sizing: border-box;
            padding-left: 4.8rem;
            padding-right: 4.8rem;
        }
    }

    font-size: $fontSize14;
    font-weight: $fontWeight400;

    .bottom_content {
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        @media (max-width: 420px) {
            text-align: center;
        }

        .copyright_content {
            color: $whiteColorOpacity;
        }

        a {
            color: $whiteColorOpacity;
            cursor: pointer;
        }
    }
}

@media (max-width: 730px) {
    .footer_content_wrapper {
        .footer_content_bottom {
            height: auto;
            line-height: 3rem;

            .bottom_content {
                flex-direction: column;
            }
        }
    }
}
</style>
