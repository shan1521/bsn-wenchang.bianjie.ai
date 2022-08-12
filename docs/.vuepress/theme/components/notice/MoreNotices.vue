<template>
    <div class="morenotices_container">
        <div class="morenotices_content_container">
            <div class="morenotices_content">
                <div class="title">{{noticeContent.title}}</div>
                <ul class="notice_list">
                    <li class="notice_item" v-for="(item,index) in noticesList" :key="index" @click="changeShowMask(index)">
                        <div class="notice_top">
                            <div class="notice_title">{{item.title}}</div>
                            <div class="notice_date">
                                <i class="iconfont icon-xingzhuangjiehe"></i>{{item.date}}
                            </div>
                        </div>
                        <div class="notice_bottom">
                            {{item.info}}
                        </div>
                    </li>
                </ul>
                <div class="notices_pagination">
                    <el-pagination
                        layout="prev, pager, next"
                        :page-size="10"
                        @current-change="changeCurrentPage"
                        :current-page="currentPage"
                        :total="total"
                        prev-text="上一页"
                        next-text="下一页"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <NoticeMask v-if="showMask" :showMask.sync="showMask" :notice="notice"></NoticeMask>
    </div>
</template>

<script>
import NoticeMask from "../common/NoticeMask.vue";
export default {
    name: "MoreNotices",
    data() {
        return {
            total: 0,
            currentPage: 1,
            showMask: false,
            notice: ""
        }
    },
    computed: {
        noticeContent() {
            return this.$frontmatter.noticeContent;
        },
        noticesList() {
            if(this.$frontmatter && this.$frontmatter.noticeContent) {
                let notices = JSON.parse(JSON.stringify(this.noticeContent.noticeList));
                return notices.splice((this.currentPage - 1) * 10, 10);
            }
        },
    },
    methods: {
        setTotal(){
            if(this.$frontmatter && this.$frontmatter.noticeContent.noticeList.length >= 0){
                this.total = this.$frontmatter.noticeContent.noticeList.length;
            }
        },
        changeShowMask(index) {
            this.showMask = true;
            this.notice = this.noticesList[index].maskContent;
        },
        changeCurrentPage(page) {
            this.currentPage = page;
        },
    },
    mounted() {
        this.setTotal();
    },
    components: {
        NoticeMask
    }
}
</script>

<style lang="stylus" scoped>
.morenotices_container {
    width: 100%;
    .morenotices_content_container {
        margin: 0 auto;
        max-width: 129.6rem;
        .morenotices_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 4.8rem;
            max-width: 129.6rem;
            @media (max-width: 400px) {
                padding: 8rem 1.6rem;
            }
            .title {
                font-size: $fontSize24;
                font-weight: 600;
                color: #000000;
                line-height: 2.4rem;
                text-align: center;
            }
            .notice_list {
                margin: 2.9rem auto 0;
                .notice_item {
                    box-sizing: border-box;
                    padding: 1.9rem 0;
                    border-bottom: 1px solid #E8EBF5;
                    cursor: pointer;
                    &:hover {
                        .notice_top {
                            .notice_title {
                                color: rgba(112, 101, 255, 1);
                            }
                        }
                        .notice_bottom {
                            color: rgba(112, 101, 255, 1);
                        }
                    }
                    .notice_top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .notice_title {
                            max-width: 64rem;
                            font-size: $fontSize16;
                            font-weight: 600;
                            color: #000000;
                            line-height: 2.4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .notice_date {
                            font-size: $fontSize14;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.64);
                            line-height: 2.4rem;
                            white-space: nowrap;
                            .iconfont {
                                margin-right: 0.4rem;
                                font-size: $fontSize14;
                            }
                        }
                    }
                    .notice_bottom {
                        margin-top: 1.2rem;
                        font-size: $fontSize14;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.64);
                        line-height: 2.4rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
            .notices_pagination {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 1.9rem;
                .el-pagination {
                    .btn-prev, .btn-next {
                        padding: 0;
                        min-width: 6.2rem;
                        height: 3rem;
                        font-size: $fontSize14;
                        text-align: center;
                        border: 0.1rem solid #EFEEFC;
                        border-radius: 0.2rem;
                        &:hover:not(:disabled) {
                            color: $highlightDetailColor;
                            border-color: $highlightDetailColor;
                        }
                    }
                    .btn-next {
                        margin-left: 1rem;
                    }
                    .el-pager {
                        .number {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-left: 1rem;
                            min-width: 3rem;
                            height: 3rem;
                            font-size: $fontSize14;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.65);
                            border: 0.1rem solid #EFEEFC;
                            border-radius: 0.2rem;
                            &:hover {
                                color: $highlightDetailColor;
                                border-color: $highlightDetailColor;
                            }
                        }
                        .active {
                            color: #fff;
                            background: $highlightDetailColor;
                            cursor: pointer;
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>