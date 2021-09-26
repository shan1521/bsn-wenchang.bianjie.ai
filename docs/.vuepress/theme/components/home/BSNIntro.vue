<template>
    <div class="bsnintro_container">
        <div class="bsnintro_content_container">
            <div class="bsnintro_content">
                <div class="img_wrap">
                    <img src="../../assets/BSN/bsn_image.png" alt="">
                </div>
                <div class="intro_content">
                    <p class="intro_item" v-for="(item,index) in chainIntro.chainIntroList" :key="index">
                        {{item.paragraph}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BSNIntro',
    props: ['chainIntro']
}
</script>

<style lang="stylus">
.bsnintro_container {
    width: 100%;
    .bsnintro_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .bsnintro_content {
            box-sizing: border-box;
            padding: 6.4rem 0 8rem;
            margin: 0 auto;
            max-width: 91.4rem;
            display: flex;
            // justify-content: space-between;
            align-items: center;
            @media (max-width: 900px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .img_wrap {
                width: 32.6rem;
                @media (max-width: 900px) {
                    display: none;
                }
                img {
                    width: 100%;
                }
            }
            .intro_content {
                margin-left: 6rem;
                max-width: 52.8rem;
                @media (max-width: 970px) {
                    margin-left: 3.2rem;
                }
                @media (max-width: 900px) {
                    margin-left: 0;
                    max-width: 100%;
                }
                .intro_item {
                    margin-top: 2.4rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight500;
                    color: rgba(0, 0, 0, 0.64);
                    line-height: 2.4rem;
                    &:first-child {
                        margin-top: 0;
                        font-size: $fontSize16;
                        font-weight: $fontWeight600;
                        color: #000000;
                        line-height: 2.4rem;
                    }
                }
            }
        }
    }
}
</style>