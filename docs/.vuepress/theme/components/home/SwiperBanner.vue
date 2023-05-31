<template>
    <div class="swiper_container" ref="mySwiper">
        <a-carousel dots-class="slick-dots" autoplay :autoplaySpeed="4000" :speed="2000">
            <template v-for="(item,index) in titleContent">
                <Title :key="index" :content="titleContent[index]" :class="{special_title: index === 0}"></Title>
            </template>
        </a-carousel>
    </div>
</template>

<script>
import {Carousel} from "ant-design-vue";
import Title from "./Title.vue";
export default {
    name: "SwiperBanner",
    props: ["titleContent"],
    components: {
        Carousel,
        Title
    }
};
</script>

<style lang="stylus" scoped>
.swiper_container{
    position: relative;
    width: 100%;
    height: 36rem;
    :deep(.ant-carousel) {
        .slick-slider {
            .slick-dots-bottom {
                bottom: 2.4rem;
            }
        }
        .slick-dots {
            li {
                button {
                    width: 1.6rem;
                    height: 0.4rem;
                    background: rgba(213, 226, 255, 1);
                    opacity: 1;
                }
                &.slick-active {
                    button {
                        width: 3.2rem;
                        background: rgba(112, 101, 255, 0.6);
                    }
                }
            }
        }
        .slick-dots-bottom {
            bottom: 2.4rem;
        }
    }
    :deep(.special_title) {
        .link_list {
            @media (max-width: 470px) {
                flex-direction: column;
                .link_wrap {
                    margin: 0 0 0 2rem !important;
                    &:last-child {
                        margin-top: 2rem !important;
                    }
                }
            }
        }
    }
}
</style>