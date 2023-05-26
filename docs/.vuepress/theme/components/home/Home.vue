<template>
    <div class="home_container">
        <SwiperBanner :titleContent="titleContent"></SwiperBanner>
        <Notice v-if="noticeContent" :noticeContent="noticeContent"></Notice>
        <Intro :chainIntro="chainIntro"></Intro>
        <CoreFunc :coreFuncContent="coreFuncContent"></CoreFunc>
        <Process></Process>
    </div>
</template>

<script>
import SwiperBanner from './SwiperBanner';
import Intro from './Intro';
import CoreFunc from './CoreFunc';
import Process from './Process';
import Notice from './Notice';
export default {
    name: 'Home',
    computed: {
        titleContent() {
            return this.$frontmatter.titleContent;
        },
        noticeContent() {
            return this.$frontmatter.noticeContent;
        },
        chainIntro() {
            return this.$frontmatter.chainIntro;
        },
        coreFuncContent() {
            return this.$frontmatter.coreFuncContent;
        }
    },
    components: {
        SwiperBanner,
        Notice,
        Intro,
        CoreFunc,
        Process
    }
}
</script>

<style lang="stylus">
.home_container {
    width: 100%;
    height: 100%;
}
</style>