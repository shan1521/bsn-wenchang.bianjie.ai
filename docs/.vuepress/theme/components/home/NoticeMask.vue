<template>
    <div class="mask_container">
        <div class="mask_content">
            <div class="mask_title" v-if="noticeContent.title">{{noticeContent.title}}</div>
            <div class="mask_mainbody">
                <div class="mask_honorific" v-if="noticeContent.honorific">{{noticeContent.honorific}}</div>
                <ul class="mask_notice_list" v-if="noticeContent.noticeList">
                    <li class="mask_notice_item" v-for="(item,index) in noticeContent.noticeList" v-html="item.paragraph">
                    </li>
                </ul>
                <div v-if="noticeContent.welcome" class="welcome">{{noticeContent.welcome}}</div>
                <div v-if="noticeContent.qrCode" class="qr_code">
                    <img :src="searchImg(noticeContent.qrCode)" alt="">
                </div>
                <div v-if="noticeContent.date" class="date">{{noticeContent.date}}</div>
            </div>
            <div class="close_btn" @click="changeShowMask">
                <i class="iconfont icon-close2"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoticeMask",
    props: ['showMask','noticeContent'],
    computed: {
        searchImg() {
            return function(imgName) {
                return `/${imgName}`;
            }
        }
    },
    methods: {
        changeShowMask(){
            this.$emit('update:showMask', false);
        }
    }
}
</script>

<style lang="stylus" scoped>
.mask_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 768px) {
        box-sizing: border-box;
        padding: 0 4.8rem;
    }
    @media(max-width: 415px) {
        padding: 0 1.6rem;
    }
    .mask_content {
        position: relative;
        box-sizing: border-box;
        padding: 4.8rem 4.8rem;
        display: flex;
        flex-direction: column;
        max-width: 64rem;
        height: 64rem;
        overflow: hidden;
        background: #fff;
        border-radius: 0.4rem;
        @media(max-width: 415px) {
            padding: 3.2rem 1.6rem;
        }
        .mask_title {
            font-size: $fontSize24;
            font-weight: $fontWeight400;
            text-align: center;
        }
        .mask_mainbody {
            margin-top: 2.4rem;
            height: 69.6rem;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            .mask_honorific {
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: rgba(0,0,0,0.7);
            }
            .mask_notice_list {
                margin-top: 1.6rem;
                .mask_notice_item {
                    margin-top: 1.6rem;
                    line-height: 2.4rem;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    color: rgba(0,0,0,0.7);
                    text-indent: 2em;
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }

            .welcome {
                margin-top: 1.6rem;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: rgba(0,0,0,0.7);
                text-indent: 2em;
            }
            .qr_code {
                margin: 2.4rem auto 0;
                width: 18rem;
                height: 18rem;
                img {
                    width: 100%;
                }
            }
            .date {
                margin-top: 1.6rem;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                color: rgba(0,0,0,0.7);
                text-align: right;
            }
        }
        .close_btn {
            position: absolute;
            top: 1.6rem;
            right: 1.6rem;
            cursor: pointer;
            .iconfont {
                font-size: $fontSize16;
                color: $highlightDetailColor;
            }
        }
    }
}
</style>