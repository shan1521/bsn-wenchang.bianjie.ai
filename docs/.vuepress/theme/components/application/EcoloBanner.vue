<template>
    <div class="ecolobanner_container">
        <div class="ecolobanner_content_container">
            <div class="ecolobanner_content">
                <div class="title">{{appBannerContent.title}}</div>
                <div class="sub_title">{{appBannerContent.subTitle}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EcoloBanner",
    props: ["appBannerContent"]
}
</script>

<style lang="stylus" scoped>
.ecolobanner_container {
    width: 100%;
    background: url(../../assets/ecoloapp/ecoloapp_banner.png) no-repeat center / cover;
    @media (max-width: 768px) {
        background: url(../../assets/home/banner_768.png) no-repeat center / cover !important;
    }
    .ecolobanner_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .ecolobanner_content {
            box-sizing: border-box;
            padding: 9.5rem 4.8rem;
            @media (max-width: 400px) {
                padding: 9.5rem 1.6rem;
            }
            .title {
                font-size: $fontSize48;
                font-weight: 400;
                color: #000000;
                line-height: 4.8rem;
                @media (max-width: 600px) {
                    font-size: $fontSize40;
                }
                @media (max-width: 520px) {
                    font-size: $fontSize24;
                    font-weight: 600;
                }
                @media (max-width: 400px) {
                    text-align: center;
                }
            }
            .sub_title {
                margin-top: 2.6rem;
                max-width: 57.4rem;
                font-size: $fontSize20;
                font-weight: 400;
                color: #000000;
                line-height: 3.2rem;
                @media (max-width: 520px) {
                    font-size: $fontSize16;
                }
                @media (max-width: 400px) {
                    text-align: center;
                }
            }
        }
    }
}
</style>