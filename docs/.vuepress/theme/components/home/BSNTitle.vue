<template>
    <div class="bsntitle_container">
        <div class="bsntitle_content_container">
            <div class="bsntitle_content">
                <div class="title">{{bsnTitleContent.title}}</div>
                <div class="sub_title">{{bsnTitleContent.subTitle}}</div>
                <router-link class="doc_wrap" :to="bsnTitleContent.route">
                    <i class="iconfont icon-doct"></i>
					<span class="link_text">{{bsnTitleContent.linkText}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNTitle',
    props: ['bsnTitleContent']
}
</script>

<style lang="stylus">
.bsntitle_container {
    width: 100%;
    height: 36rem;
    background: url(../../assets/BSN/bsn_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/BSN/bsn_banner_768.png) no-repeat center / cover;
    }
    @media (max-width: 375px) {
        background: url(../../assets/BSN/bsn_banner_375.png) no-repeat center / cover;
    }
    .bsntitle_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        .bsntitle_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding-top: 8.8rem;
            max-width: 105.6rem;
            height: 100%;
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
            }
            .sub_title {
                margin-top: 3.2rem;
                font-size: $fontSize24;
                font-weight: $fontWeight400;
                color: #000000;
                line-height: 2.4rem;
                letter-spacing: 0.1rem;
            }
            .doc_wrap {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                margin-top: 4rem;
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
</style>