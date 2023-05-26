<template>
    <div class="example_container">
        <div class="example_content_container">
            <div class="example_content">
                <div class="title">{{exampleContent.title}}</div>
                <ul class="example_list">
                    <li class="example_item_container" v-for="(example,index) in exampleContent.exampleList" :key="index">
                        <div class="example_item_wrap">
                            <div class="example_item">
                                <div class="example_item_img">
                                    <img :src="example.imgLink" alt="">
                                </div>
                                <div class="example_item_content">
                                    <div class="example_name">{{example.exampleName}}</div>
                                    <div class="example_affiliation">
                                        <i class="iconfont icon-gongsi"></i>
                                        <span class="affiliation">{{example.affiliation}}</span>
                                    </div>
                                    <ul class="intro_list">
                                        <li class="intro_item" v-for="(intro,iIndex) in example.introList" :key="iIndex">
                                            {{intro.intro}}
                                        </li>
                                    </ul>
                                    <ul class="desc_list">
                                        <li class="desc_item" v-for="(desc,dIndex) in example.descList" :key="dIndex">
                                            {{desc.description}}
                                        </li>
                                    </ul>
                                    <a class="more" :href="example.link" target="_blank" rel="noopener noreferrer">
                                        <span class="more_text">了解更多</span>
                                        <i class="iconfont icon-turnto"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Example',
    props: ['exampleContent'],
    computed: {
        differentImgName(){
            return function(imgName) {
                return `/${imgName}`;
            }
        }
    }
}
</script>

<style lang="stylus">
.example_container {
    width: 100%;
    .example_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .example_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 8rem 0;
            max-width: 108rem;
            @media (max-width: 1140px) {
                padding-left: 4.8rem;
                padding-right: 4.8rem;
            }
            @media (max-width: 400px) {
                padding-left: 1.6rem;
                padding-right: 1.6rem;
            }
            .title {
                font-size: $fontSize24;
                font-weight: $fontWeight600;
                color: #000000;
                line-height: 2.4rem;
                text-align: center;
            }
            .example_list {
                margin-top: 4.8rem;
                .example_item_container {
                    display: flex;
                    align-items: center;
                    margin-top: 2.4rem;
                    padding: 0.8rem;
                    border: 0.1rem solid #E8EBF5;
                    border-radius: 0.4rem;
                    transition: transform .3s linear;
                    &:first-child {
                        margin-top: 0;
                    }
                    @media (any-hover: hover) {
                        &:hover {
                            border: 0.1rem solid $highlightDetailColor;
                            transform: scale(1.05);
                            transition: transform .3s linear;
                            .example_item_wrap {
                                padding: 2.4rem 4rem 3.6rem 4.4rem;
                                background: url(../../assets/home/example_bg_color.png) no-repeat center / cover;
                                .example_item {
                                    .example_item_content {
                                        .example_affiliation {
                                            display: none;
                                            @media (max-width: 768px) {
                                                display: block;
                                            }
                                        }
                                        .intro_list {
                                            display: none;
                                            @media (max-width: 768px) {
                                                display: block;
                                            }
                                        }
                                        .desc_list {
                                            display: block;
                                            margin-top: 2.4rem;
                                            .desc_item {
                                                margin-top: 2.4rem;
                                                font-size: $fontSize14;
                                                font-weight: $fontWeight400;
                                                color: rgba(0, 0, 0, 0.75);
                                                line-height: 2.4rem;
                                                &:first-child {
                                                    margin-top: 0;
                                                }
                                            }
                                        }
                                        .more {
                                            display: flex;
                                            align-items: center;
                                            margin-top: 2.6rem;
                                            color: $highlightDetailColor;
                                            &:focus-visible {
                                                outline: none;
                                                outline-offset: 0;
                                            }
                                            @media (max-width: 768px) {
                                                justify-content: center;
                                            }
                                            .more_text {
                                                font-size: $fontSize14;
                                                font-weight: $fontWeight400;
                                                line-height: 1.4rem;
                                            }
                                            .iconfont {
                                                margin-left: 0.8rem;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .example_item_wrap {
                        box-sizing: border-box;
                        padding: 3.2rem 4rem 2.8rem 3.6rem;
                        width: 100%;
                        min-height: 24rem;
                        background: url(../../assets/home/example_bg.png) no-repeat center / cover;
                        @media (max-width: 768px) {
                            padding: 1.6rem;
                        }
                        .example_item {
                            display: flex;
                            align-items: center;
                            @media (max-width: 768px) {
                                flex-direction: column;
                            }
                            .example_item_img {
                                width: 16rem;
                                height: 16rem;
                                img {
                                    height: 100%;
                                }
                            }
                            .example_item_content {
                                margin-left: 3.6rem;
                                @media (max-width: 768px) {
                                    margin-left: 0;
                                }
                                .example_name {
                                    font-size: $fontSize20;
                                    font-weight: $fontWeight600;
                                    color: #000000;
                                    line-height: 3.2rem;
                                    @media (max-width: 768px) {
                                        margin-top: 1.6rem;
                                        text-align: center;
                                    }
                                }
                                .example_affiliation {
                                    display: flex;
                                    align-items: center;
                                    margin-top: 6.4rem;
                                    @media (max-width: 768px) {
                                        justify-content: center;
                                    }
                                    .iconfont {
                                        font-size: $fontSize16;
                                        color: rgba(112,101,255, 0.34);
                                    }
                                    .affiliation {
                                        margin-left: 0.8rem;
                                        font-size: $fontSize14;
                                        font-weight: $fontWeight400;
                                        color: rgba(0, 0, 0, 0.64);
                                        line-height: 2.4rem;
                                    }
                                }
                                .intro_list {
                                    margin-top: 1.6rem;
                                    @media (max-width: 768px) {
                                        display: none;
                                    }
                                    .intro_item {
                                        font-size: $fontSize14;
                                        font-weight: $fontWeight400;
                                        color: rgba(0, 0, 0, 0.75);
                                        line-height: 2.4rem;
                                    }
                                }
                                .desc_list {
                                    display: none;
                                    @media (max-width: 768px) {
                                        display: block;
                                        margin-top: 2.4rem;
                                        .desc_item {
                                            margin-top: 2.4rem;
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight400;
                                            color: rgba(0, 0, 0, 0.75);
                                            line-height: 2.4rem;
                                            text-align: center;
                                            &:first-child {
                                                margin-top: 0;
                                            }
                                        }
                                    }
                                }
                                .more {
                                    display: none;
                                    &:focus-visible {
                                        outline: none;
                                        outline-offset: 0;
                                    }
                                    @media (max-width: 768px) {
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        margin-top: 2.6rem;
                                        color: $highlightDetailColor;
                                        cursor: pointer;
                                        .more_text {
                                            font-size: $fontSize14;
                                            font-weight: $fontWeight400;
                                            line-height: 1.4rem;
                                        }
                                        .iconfont {
                                            margin-left: 0.8rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>