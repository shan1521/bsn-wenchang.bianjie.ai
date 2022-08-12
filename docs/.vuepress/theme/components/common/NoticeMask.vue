<template>
    <div class="mask_container">
        <div class="mask_content_container">
            <div class="mask_content">
                <div class="title" v-html="notice.title"></div>
                <div class="content" v-html="notice.content"></div>
            </div>
            <div class="close_btn" @click="updateShowMask">
                <i class="iconfont icon-close2"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NoticeMask",
    props: ['showMask','notice'],
    methods: {
        updateShowMask(){
            this.$emit('update:showMask', false);
        }
    },
    mounted() {
        console.log(this.notice,'notice');
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
    .mask_content_container {
        position: relative;
        max-width: 64rem;
        background: #fff;
        border-radius: 0.4rem;
        
        .mask_content {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            padding: 4rem 4.8rem;
            font-size: $fontSize16;
            line-height: 3.2rem;
            @media(max-width: 415px) {
                padding: 4rem 1.6rem;
            }
            .title {
                text-align: center;
                font-size: 20px;
                font-weight: 600;
                color: #000;
            }
            .content {
                margin-top: 2.4rem;
                height: 49.6rem;
                overflow: auto;
                scrollbar-width: none;
                @media(max-width: 768px) {
                    height: 27.6rem;
                }
                ul {
                    list-style-position: inside;
                }
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