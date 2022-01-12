<template>
    <div class="ecoloapp_container">
        <EcoloBanner :appBannerContent="appBannerContent"></EcoloBanner>
        <BSNExample :exampleContent="exampleContent"></BSNExample>
        <Partners :partners="partners"></Partners>
    </div>
</template>

<script>
import EcoloBanner from "./EcoloBanner.vue";
import BSNExample from "./BSNExample.vue";
import Partners from "./Partners.vue";
export default {
    name: "EcoloApp",
    computed: {
        appBannerContent() {
            return this.$frontmatter.appBannerContent;
        },
        exampleContent() {
            return this.$frontmatter.exampleContent;
        },
        partners() {
            return this.$frontmatter.partners;
        },
    },
    components: {
        EcoloBanner,
        BSNExample,
        Partners
    }
}
</script>

<style lang="stylus" scoped>

</style>