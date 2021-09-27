<template>
    <div class="bsn_container">
        <BSNTitle :bsnTitleContent="bsnTitleContent"></BSNTitle>
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
export default {
    name: 'BSN',
    computed: {
        bsnTitleContent() {
            return this.$frontmatter.bsnTitleContent;
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