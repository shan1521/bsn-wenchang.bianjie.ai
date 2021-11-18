<template>
    <div class="bsn_container">
        <BSNTitle :bsnTitleContent="bsnTitleContent"></BSNTitle>
        <Notice v-if="noticeContent" :noticeContent="noticeContent"></Notice>
        <BSNIntro :chainIntro="chainIntro"></BSNIntro>
        <BSNProcess></BSNProcess>
        <BSNExample :exampleContent="exampleContent"></BSNExample>
    </div>
</template>

<script>
import BSNTitle from './BSNTitle';
import BSNIntro from './BSNIntro';
import BSNProcess from './BSNProcess';
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
        exampleContent() {
            return this.$frontmatter.exampleContent;
        },
    },
    components: {
        BSNTitle,
        Notice,
        BSNIntro,
        BSNProcess,
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