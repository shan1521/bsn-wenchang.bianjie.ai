<template>
    <div class="notice_container">
        <div class="notice_content_container">
            <div class="notice_content">
                <div class="notice_img">
                    <img src="../../assets/notice.png" alt="">
                </div>
                <vue-seamless-scroll class="notice_description" :data="noticeContent.noticeList" :class-option="classOption">
                    <ul class="notice_list">
                        <li class="notice_item" v-for="(item,index) in noticeContent.noticeList" :key="index" @click="updateShowMask(index)">
                            <span>{{item.title}}</span>
                            <span>{{item.info}}</span>
                        </li>
                    </ul>
                </vue-seamless-scroll>
                <router-link class="go_chain" to="/notices">
                    <span class="text">{{noticeContent.moreText}}</span>
                    <i class="iconfont icon-turnto"></i>
                </router-link>
            </div>
        </div>
        <NoticeMask v-if="showMask" :showMask.sync="showMask" :notice="notice"></NoticeMask>
    </div>
</template>

<script>
import NoticeMask from '../common/NoticeMask';
export default {
    name: "Notice",
    props:['noticeContent'],
    data() {
        return {
            showMask: false,
            classOption: {
                direction: 1,
                singleHeight: 48,
                limitMoveNum: 5,
                waitTime: 3000,
                switchDelay: 3000,
                hoverStop: true
            },
            notice: ""
        };
    },
    methods: {
        updateShowMask(index) {
            this.showMask = true;
            this.notice = this.noticeContent.noticeList[index].maskContent;
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
                display: flex;
                align-items: center;
                margin-right: 1.6rem;
                width: 2.4rem;
                height: 2rem;
                img {
                    height: 100%;
                    vertical-align: middle;
                }
            }
            .notice_description {
                flex: 1 0;
                height: 100%;
                font-size: $fontSize14;
                font-weight: $fontWeight400;
                line-height: 1.6rem;
                overflow: hidden;
                .notice_list {
                    height: 100%;
                    .notice_item {
                        height: 4.8rem;
                        line-height: 4.8rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .go_chain {
                display: flex;
                align-items: center;
                margin-left: 1.6rem;
                color: $highlightDetailColor;
                .iconfont {
                    margin-left: 0.8rem;
                }
            }
        }
    }
}
</style>