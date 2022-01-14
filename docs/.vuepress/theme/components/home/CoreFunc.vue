<template>
    <div class="corefunc_container">
        <div class="corefunc_content_container">
            <div class="corefunc_content">
                <div class="title">{{coreFuncContent.title}}</div>
                <ul class="func_list">
                    <li class="func_item" v-for="(item, index) in coreFuncContent.funcList" :key="index">
                        <div class="item_img">
                            <img :src="$withBase(differentImgName(item.imgName))" alt="">
                        </div>
                        <div class="item_info">
                            <div class="func_name">{{item.funcName}}</div>
                            <ul class="item_intro_list">
                                <li class="item_intro" v-for="(iItem, iIndex) in item.introList" :key="iIndex">
                                    {{iItem.intro}}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CoreFunc",
    props: ["coreFuncContent"],
    computed: {
        differentImgName() {
            return function(imgName) {
                return `/home/${imgName}`;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.corefunc_container {
    width: 100%;
    height: 100%;
    background: #F9FAFD;
    .corefunc_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .corefunc_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 6.4rem 4.8rem;
            max-width: 112.4rem;
            @media (max-width: 400px) {
                padding: 6.4rem 1.6rem;
            }
            .title {
                font-size: 24px;
                font-weight: 600;
                color: #000000;
                line-height: 24px;
                text-align: center;
            }
            .func_list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 3.6rem 11.2rem;
                margin: 4.8rem auto 0;
                @media (max-width: 1103px) {
                    grid-gap: 3.6rem 4.8rem;
                }
                @media (max-width: 768px) {
                    grid-template-columns: repeat(1, 1fr);
                }
                .func_item {
                    display: flex;
                    align-items: center;
                    .item_img {
                        width: 7.6rem;
                        height: 7.6rem;
                        img {
                            height: 100%;
                            vertical-align: middle;
                        }
                    }
                    .item_info {
                        margin-left: 2.2rem;
                        .func_name {
                            font-size: $fontSize16;
                            font-weight: 600;
                            color: #000000;
                            line-height: 2.4rem;
                        }
                        .item_intro_list {
                            margin-top: 0.6rem;
                            .item_intro {
                                font-size: $fontSize14;
                                font-weight: 400;
                                color: rgba(0, 0, 0, 0.65);
                                line-height: 2.4rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>