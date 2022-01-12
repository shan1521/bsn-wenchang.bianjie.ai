<template>
    <div class="bsntitle_container" :style="differentBanner(content.img)">
        <div class="bsntitle_content_container">
            <div class="bsntitle_content">
                <div class="title">{{content.title}}</div>
                <div class="sub_title">{{content.subTitle}}</div>
                <div class="link_wrap">
                    <router-link v-if="content.route" class="doc_wrap" :to="content.route">
                        <i class="iconfont" :class="content.icon"></i>
                        <span class="link_text">{{content.linkText}}</span>
                    </router-link>
                    <a v-if="content.link" class="doc_wrap" :href="content.link" target="_blank" rel="noopener noreferrer">
                        <i class="iconfont" :class="content.icon"></i>
                        <span class="link_text">{{content.linkText}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNTitle',
    props: ["content"],
    computed: {
        differentBanner() {
            return function(imgName) {
                return `background: url(/home/${imgName}.png) no-repeat center / cover`;
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
.bsntitle_container {
    width: 100%;
    height: 36rem;
    @media (max-width: 768px) {
        background: url('../../assets/BSN/bsn_banner_768.png') no-repeat center / cover !important;
    }
    .bsntitle_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        .bsntitle_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            box-sizing: border-box;
            margin: 0 auto;
            max-width: 105.6rem;
            @media (max-width: 1200px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .title {
                font-size: $fontSize48;
                font-weight: $fontWeight400;
                color: #000000;
                line-height: 4.8rem;
                letter-spacing: 0.4rem;
                @media (max-width: 594px) {
                    font-size: $fontSize40;
                    text-align: center;
                }
                @media (max-width: 520px) {
                    font-size: $fontSize24;
                    font-weight: 600;
                }
            }
            .sub_title {
                margin-top: 3.2rem;
                max-width: 56rem;
                font-size: $fontSize20;
                font-weight: $fontWeight400;
                color: #000000;
                line-height: 3.2rem;
                letter-spacing: 0.1rem;
                @media (max-width: 594px) {
                    margin-top: 2.4rem;
                    font-size: $fontSize16;
                    text-align: center;
                }
            }
            .link_wrap {
                margin-top: 4rem;
                @media (max-width: 594px) {
                    margin: 2.4rem auto 0;
                }
                .doc_wrap {
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    padding-left: 0.4rem;
                    padding-right: 0.4rem;
                    width: 11.2rem;
                    height: 3.2rem;
                    border: 0.1rem solid $highlightDetailColor;
                    border-radius: 1.6rem;
                    .iconfont {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 0.8rem;
                        width: 2.4rem;
                        height: 2.4rem;
                        color: #fff;
                        background: $highlightDetailColor;
                        border-radius: 50%;
                    }
                    .link_text {
                        font-size: $fontSize16;
                        font-weight: 500;
                        color: #000000;
                        line-height: 2.2rem;
                    }
                }
            }
        }
    }
}
</style>