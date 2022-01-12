<template>
    <div class="mask_container">
        <div class="mask_content_container">
            <div class="mask_content" v-html="notice"></div>
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
            console.log(">>>>>>>>")
            this.$emit('update:showMask', false);
        }
    }
}
</script>

<style lang="stylus">
.mask_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
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
        box-sizing: border-box;
        padding: 4.8rem 4.8rem;
        display: flex;
        flex-direction: column;
        max-width: 64rem;
        height: 64rem;
        overflow: auto;
        background: #fff;
        border-radius: 0.4rem;
        @media(max-width: 415px) {
            padding: 3.2rem 1.6rem;
        }
        .mask_content {
            font-size: $fontSize16;
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