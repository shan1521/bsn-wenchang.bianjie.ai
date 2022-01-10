<template>
    <div class="notice_container">
        <div class="notice_content_container">
            <div class="notice_content" @click="updateShowMask">
                <div class="notice_img">
                    <img src="../../assets/notice.png" alt="">
                </div>
                <vue-seamless-scroll class="notice_description" :data="noticeContent.noticeList" :class-option="classOption">
                    <ul class="notice_list">
                        {{noticeContent.title}}
                        {{noticeContent.honorific}}
                        <li class="notice_item" v-for="(item,index) in noticeContent.noticeList" v-html="item.paragraph" :key="index">
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <NoticeMask v-if="showMask" :showMask.sync="showMask" :noticeContent="noticeContent"></NoticeMask>
    </div>
</template>

<script>
import NoticeMask from './NoticeMask';
export default {
    name: "Notice",
    props:['noticeContent'],
    data() {
        return {
            showMask: false
        };
    },
    computed: {
        classOption() {
            return {
                direction: 2,
            }
        }
    },
    methods: {
        updateShowMask() {
            this.showMask = true;
        },
    },
    components: {
        NoticeMask,
    }
}
</script>

<style lang="stylus" scoped>
.notice_container {
    width: 100%;
    height: 4.8rem;
    background: #FAFBFF;
    .notice_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        height: 100%;
        cursor: pointer;
        @media(max-width: 1200px) {
            box-sizing: border-box;
            padding: 0 4.8rem;
        }
        @media(max-width: 432px) {
            padding: 0 1.6rem;
        }
        .notice_content {
            display: flex;
            align-items: center;
            height: 100%;
            .notice_img {
                margin-right: 1.6rem;
                height: 2.4rem;
                img {
                    height: 100%;
                }
            }
            .notice_description {
                height: 100%;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                line-height: 1.6rem;
                overflow: hidden;
                .notice_list {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: break-all;
                }
            }
        }
    }
}
</style>