<template>
    <div class="bsn_container">
        <SwiperBanner :bsnTitleContent="bsnTitleContent"></SwiperBanner>
        <Notice v-if="noticeContent" :noticeContent="noticeContent"></Notice>
        <BSNIntro :chainIntro="chainIntro"></BSNIntro>
        <CoreFunc :coreFuncContent="coreFuncContent"></CoreFunc>
        <BSNProcess></BSNProcess>
        <AboutBSN :aboutBSN="aboutBSN"></AboutBSN>
    </div>
</template>

<script>
import SwiperBanner from './SwiperBanner';
import BSNIntro from './BSNIntro';
import CoreFunc from './CoreFunc';
import BSNProcess from './BSNProcess';
import AboutBSN from "./AboutBSN";
import Notice from './Notice';
export default {
    name: 'BSN',
    computed: {
        bsnTitleContent() {
            return this.$frontmatter.bsnTitleContent;
        },
        noticeContent() {
            return this.$frontmatter.noticeContent;
        },
        chainIntro() {
            return this.$frontmatter.chainIntro;
        },
        coreFuncContent() {
            return this.$frontmatter.coreFuncContent;
        },
        aboutBSN() {
            return this.$frontmatter.aboutBSN;
        },
    },
    components: {
        SwiperBanner,
        Notice,
        BSNIntro,
        CoreFunc,
        BSNProcess,
        AboutBSN,
    }
}
</script>

<style lang="stylus">
.bsn_container {
    width: 100%;
    height: 100%;
}
</style>