<template>
    <div class="title_container" :style="differentBanner(content.img)">
        <div class="title_content_container">
            <div class="title_content">
                <div class="title">{{content.title}}</div>
                <div class="sub_title" v-html="content.subTitle"></div>
                <ul class="link_list" v-if="content.linkList">
                    <li class="link_wrap" v-for="(item, index) in content.linkList" :key="index">
                        <router-link v-if="item.route" class="doc_wrap" :to="item.route">
                            <i class="iconfont" :class="item.icon"></i>
                            <span class="link_text">{{item.linkText}}</span>
                        </router-link>
                        <a v-if="item.link" class="doc_wrap" :href="item.link" target="_blank" rel="noopener noreferrer">
                            <i class="iconfont" :class="item.icon"></i>
                            <span class="link_text">{{item.linkText}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Title',
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
.title_container {
    width: 100%;
    height: 36rem;
    @media (max-width: 768px) {
        background: url('../../assets/home/banner_768.png') no-repeat center / cover !important;
    }
    .title_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        .title_content {
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
            .link_list {
                display: flex;
                margin-top: 4rem;
                @media (max-width: 594px) {
                    margin: 2.4rem auto 0;
                }
                .link_wrap {
                    margin-left: 3.6rem;
                    &:first-child {
                        margin-left: 0;
                    }
                    .doc_wrap {
                        box-sizing: border-box;
                        display: flex;
                        align-items: center;
                        padding-left: 0.4rem;
                        padding-right: 0.4rem;
                        width: 12.8rem;
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
}
</style>