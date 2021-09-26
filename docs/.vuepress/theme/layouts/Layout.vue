<template>
    <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <ClientOnly>
            <Navigation></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_content_wrapper">
                <Home v-if="$page.frontmatter.isHome" />
                <div class="md_container" v-if="showMd">
                    <div class="md_wrap">
                        <Content></Content>
                    </div>
                </div>
            </div>
        </ClientOnly>
        <ClientOnly>
            <Footer></Footer>
        </ClientOnly>
    </div>
</template>

<script>
import Navigation from "@theme/components/Navigation.vue";
import Home from "@theme/components/home/Home.vue";
import Footer from "@theme/components/Footer.vue";
import { resolveSidebarItems } from "../util";

export default {
    name: "Layout",
    components: {
        Navigation,
        Home,
        Footer
    },

    data() {
        return {
            isSidebarOpen: false,
        };
    },

    computed: {
        showMd() {
            return Object.keys(this.$page.frontmatter).length === 0;
        },
        shouldShowNavbar() {
            const { themeConfig } = this.$site;
            const { frontmatter } = this.$page;
            if (frontmatter.navbar === false || themeConfig.navbar === false) {
                return false;
            }
            return (
                this.$title ||
                themeConfig.logo ||
                themeConfig.repo ||
                themeConfig.nav ||
                this.$themeLocaleConfig.nav
            );
        },

        shouldShowSidebar() {
            const { frontmatter } = this.$page;
            return (
                !frontmatter.home &&
                frontmatter.sidebar !== false &&
                this.sidebarItems.length
            );
        },

        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            );
        },

        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass;
            return [
                {
                    "no-navbar": !this.shouldShowNavbar,
                    "sidebar-open": this.isSidebarOpen,
                    "no-sidebar": !this.shouldShowSidebar,
                },
                userPageClass,
            ];
        },
    },

    mounted() {
        this.$router.afterEach(() => {
            this.isSidebarOpen = false;
        });
    },

    methods: {
        toggleSidebar(to) {
            this.isSidebarOpen =
                typeof to === "boolean" ? to : !this.isSidebarOpen;
            this.$emit("toggle-sidebar", this.isSidebarOpen);
        },

        // side swipe
        onTouchStart(e) {
            this.touchStart = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY,
            };
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x;
            const dy = e.changedTouches[0].clientY - this.touchStart.y;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx > 0 && this.touchStart.x <= 80) {
                    this.toggleSidebar(true);
                } else {
                    this.toggleSidebar(false);
                }
            }
        },
    },
};
</script>
<style lang="stylus">
.theme-container {
    width: 100%;
    height: 100%;
    .main_content_wrapper {
        margin-top: 6rem;
        .md_container {
            margin: 0 auto;
            max-width: 96rem;
            font-size: 15px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.75);
            line-height: 36px;

            .md_wrap {
                padding-top: 60px;
                padding-bottom: 80px;


                @media (max-width: 1200px) {
                    padding-left: 48px;
                    padding-right: 48px;
                }

                @media (max-width: 432px) {
                    padding-left: 1.6px;
                    padding-right: 1.6px;
                }

                h1 {
                    line-height: 26px;
                    font-size: 24px;
                    font-weight: 600;
                    color: #000000;
                }
                h1,h2,h3,h4,h5,h6 {
                    a {
                        display: none;
                    }
                }

                ul {
                    padding-left: 20px;
                    li::before {
                        content: '';
                        display: inline-block;
                        margin-right: 8px;
                        width: 5px;
                        height: 5px;
                        line-height: 5px;
                        vertical-align: middle;
                        background: #000;
                        border-radius: 50%;
                    }
                }

                .article_about {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 16px;
                    margin-bottom: 15px;
                    line-height: 16px;

                    .article_about_owner_container {
                        display: flex;
                        align-items: center;

                        .article_about_icon_wrap {
                            margin-right: 8px;
                            width: 16px;
                            height: 16px;

                            .article_about_icon {
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                            }
                        }

                        .article_about_owner {
                            height: 16px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(0, 0, 0, 0.75);
                            line-height: 16px;
                        }
                    }

                    .article_about_time {
                        height: 16px;
                        line-height: 16px;
                        font-size: 14px;
                        font-weight: 400;
                        color: rgba(0, 0, 0, 0.64);
                    }
                }

                img {
                    width: 100%;
                    @media (max-width: 375px) {
                        width: 100% !important;
                    }
                }
                .content__default {
                    a {
                        color: #7065FF;
                        span {
                            display: none;
                        }
                    }
                    .language-javascript {
                        border-radius: 4px;
                        &::before {
                            top: 51px;
                            right: 24px;
                        }
                    }
                    ul {
                        li {
                            span {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
