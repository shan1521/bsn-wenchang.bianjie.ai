<template>
    <div class="intro_container">
        <div class="intro_content_container">
            <div class="intro_content_wrap">
                <div class="img_wrap">
                    <img src="../../assets/home/wenchang_image.png" alt="">
                </div>
                <div class="intro_content">
                    <p class="intro_item" v-for="(item,index) in chainIntro.chainIntroList" :key="index">
                        {{item.paragraph}}
                    </p>
                </div>
            </div>
            <div class="intro_info_content">
                <img src="../../assets/home/intro_info.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    props: ['chainIntro']
}
</script>

<style lang="stylus">
.intro_container {
    width: 100%;
    .intro_content_container {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 6.4rem 0 8rem;
        max-width: $contentWidth;
        .intro_content_wrap {
            box-sizing: border-box;
            padding: 0 4.8rem;
            margin: 0 auto;
            max-width: 98.8rem;
            display: flex;
            align-items: center;
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .img_wrap {
                width: 30.8rem;
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
        .intro_info_content {
            box-sizing: border-box;
            margin: 8rem auto 0;
            padding: 0 4.8rem;
            max-width: 95.5rem;
            @media (max-width: 400px) {
                padding: 0 1.6rem;
            }
            img {
                width: 100%;
                vertical-align: middle;
            }
        }
    }
}
</style>