<template>
    <div class="swiper_container" ref="mySwiper">
        <a-carousel dots-class="slick-dots" autoplay :autoplaySpeed="4000" :speed="2000">
            <div v-for="(item,index) in bsnTitleContent" :key="index">
                <BSNTitle :content="bsnTitleContent[index]"></BSNTitle>
            </div>
        </a-carousel>
    </div>
</template>

<script>
import {Carousel} from "ant-design-vue";
import BSNTitle from "./BSNTitle.vue";
export default {
    name: "SwiperBanner",
    props: ["bsnTitleContent"],
    components: {
        Carousel,
        BSNTitle
    }
};
</script>

<style lang="stylus" scoped>
.swiper_container{
    position: relative;
    width: 100%;
    height: 36rem;
    .ant-carousel {
        .slick-slider {
            .slick-dots-bottom {
                bottom: 2.4rem;
            }
        }
        .slick-dots {
            li {
                background: #fff;
                button {
                    width: 1.6rem;
                    height: 0.4rem;
                }
                &.slick-active {
                    button {
                        width: 3.2rem;
                        background: #7065FF;
                    }
                }
            }
        }
        .slick-dots-bottom {
            bottom: 2.4rem;
        }
    }
}
</style>