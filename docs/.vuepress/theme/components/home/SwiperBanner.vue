<template>
    <div class="swiper_container" ref="mySwiper">
        <!-- <swiper :options="swiperOption" v-if="bsnTitleContent">
            <swiper-slide v-for="(item,index) in bsnTitleContent" :key="index">
                <BSNTitle :content="bsnTitleContent[index]"></BSNTitle>
            </swiper-slide>
        </swiper> -->
        <a-carousel dots-class="slick-dots" autoplay>
            <div v-for="(item,index) in bsnTitleContent" :key="index">
                <BSNTitle :content="bsnTitleContent[index]"></BSNTitle>
            </div>
        </a-carousel>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import {Carousel} from "ant-design-vue";
import BSNTitle from "./BSNTitle.vue";
export default {
    name: "SwiperBanner",
    props: ["bsnTitleContent"],
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loop: true,
                speed: 1500
            },
        };
    },
    components: {
        'swiper': Swiper,
        'swiper-slide': SwiperSlide,
        Carousel,
        BSNTitle
    }
};
</script>

<style lang="stylus">
.swiper_container{
    position: relative;
    width: 100%;
    height: 36rem;
    // @media (max-width: 968px) {
    //     height: 42rem;
    // }
    // @media (max-width: 400px) {
    //     height: 28rem;
    // }
    .ant-carousel {
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
                }
                &.slick-active {
                    button {
                        width: 3.2rem;
                    }
                }
            }
        }
    }
}
</style>