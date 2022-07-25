<template>
    <div class="ecoloapp_container">
        <EcoloBanner :appBannerContent="appBannerContent"></EcoloBanner>
        <BSNExample :exampleContent="exampleContent"></BSNExample>
        <Providers :providers="providers"></Providers>
        <Partners :partners="partners"></Partners>
    </div>
</template>

<script>
import EcoloBanner from "./EcoloBanner.vue";
import BSNExample from "./BSNExample.vue";
import Providers from "./ServiceProvider"
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
        providers() {
            return this.$frontmatter.providers;
        },
        partners() {
            return this.$frontmatter.partners;
        },
    },
    components: {
        EcoloBanner,
        BSNExample,
        Providers,
        Partners
    }
}
</script>

<style lang="stylus" scoped>

</style>