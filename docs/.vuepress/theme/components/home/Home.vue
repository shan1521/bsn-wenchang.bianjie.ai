<template>
    <div class="bsn_container">
        <SwiperBanner :bsnTitleContent="bsnTitleContent"></SwiperBanner>
        <!-- <Notice v-if="noticeContent" :noticeContent="noticeContent"></Notice> -->
        <BSNIntro :chainIntro="chainIntro"></BSNIntro>
        <CoreFunc :coreFuncContent="coreFuncContent"></CoreFunc>
        <BSNProcess></BSNProcess>
        <AboutBSN :aboutBSN="aboutBSN"></AboutBSN>
        <!-- <BSNExample :exampleContent="exampleContent"></BSNExample> -->
    </div>
</template>

<script>
import SwiperBanner from './SwiperBanner';
import BSNIntro from './BSNIntro';
import CoreFunc from './CoreFunc';
import BSNProcess from './BSNProcess';
import AboutBSN from "./AboutBSN";
import BSNExample from './BSNExample';
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
        exampleContent() {
            return this.$frontmatter.exampleContent;
        },
    },
    components: {
        SwiperBanner,
        Notice,
        BSNIntro,
        CoreFunc,
        BSNProcess,
        AboutBSN,
        BSNExample
    }
}
</script>

<style lang="stylus">
.bsn_container {
    width: 100%;
    height: 100%;
}
</style>