<template>
    <div class="notice_container">
        <div class="notice_content_container">
            <div class="notice_content">
                <div class="notice_img">
                    <img src="../../assets/notice.png" alt="">
                </div>
                <div class="notice_center" @click="updateShowMask($event)">
                    <vue-seamless-scroll class="notice_description" :data="noticeContent.noticeList" :class-option="classOption">
                        <ul class="notice_list">
                            <li class="notice_item" v-for="(item,index) in noticeContent.noticeList" :key="index" :id="index+1" :data-notice="JSON.stringify(item)">
                                {{item.title}}
                                {{item.info}}
                            </li>
                        </ul>
                    </vue-seamless-scroll>
                </div>
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
                limitMoveNum: 2,
                waitTime: 3000,
                switchDelay: 3000,
                hoverStop: false,
                isSingleRemUnit: false
            },
            notice: ""
        };
    },
    methods: {
        updateShowMask(e) {
            this.showMask = true;
            this.notice = JSON.parse(e.target.getAttribute('data-notice')) && JSON.parse(e.target.getAttribute('data-notice')).maskContent;
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
    background: #FAFBFF;
    .notice_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
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
            .notice_center {
                flex: 1 0;
                height: 48px;
                overflow: hidden;
                .notice_description {
                    height: 48px;
                    font-size: $fontSize14;
                    font-weight: $fontWeight400;
                    line-height: 1.6rem;
                    .notice_list {
                        .notice_item {
                            height: 48px;
                            line-height: 48px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .go_chain {
                display: flex;
                align-items: center;
                margin-left: 1.6rem;
                font-size: 16px;
                color: $highlightDetailColor;
                .iconfont {
                    margin-left: 0.8rem;
                }
            }
        }
    }
}
</style>