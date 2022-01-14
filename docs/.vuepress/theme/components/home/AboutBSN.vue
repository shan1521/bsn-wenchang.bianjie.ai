<template>
    <div class="aboutbsn_container">
        <div class="aboutbsn_content_container">
            <div class="aboutbsn_content">
                <div class="title">{{aboutBSN.title}}</div>
                <ul class="aboutbsn_list">
                    <li class="aboutbsn_item" v-for="(item, index) in aboutBSN.aboutList" :key="index">
                        {{item.paragraph}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutBSN",
    props: ["aboutBSN"]
}
</script>

<style lang="stylus" scoped>
.aboutbsn_container {
    width: 100%;
    background: url(../../assets/BSN/aboutbsn_bg.png) no-repeat center / cover;
    .aboutbsn_content_container {
        margin: 0 auto;
        max-width: $contentWidth;
        .aboutbsn_content {
            box-sizing: border-box;
            margin: 0 auto;
            padding: 6.4rem 4.8rem 10rem;
            max-width: 108.7rem;
            @media (max-width: 400px) {
                padding: 6.4rem 1.6rem;
            }
            .title {
                font-size: $fontSize24;
                font-weight: 600;
                color: #000000;
                line-height: 24px;
                text-align: center;
            }
            .aboutbsn_list {
                margin: 4rem auto 0;
                max-width: 100%;
                .aboutbsn_item {
                    margin-top: 3.6rem;
                    font-size: $fontSize16;
                    font-weight: 400;
                    line-height: 2.8rem;
                    color: rgba(0, 0, 0, 0.65);
                    &:first-child {
                        margin-top: 0;
                    }
                }
            }
        }
    }
}
</style>