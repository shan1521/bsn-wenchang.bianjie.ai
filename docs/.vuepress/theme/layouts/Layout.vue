<template>
    <div class="theme-container" >
        <!-- 百度站长 logo -->
        <img class="logo web_logo" src="../assets/link_logo.jpg" alt="文昌链logo">
        <img class="logo web_logo_mobile" src="../assets/link_logo_mobile.jpg" alt="文昌链mobile_logo">
        <ClientOnly>
            <Navigation></Navigation>
        </ClientOnly>
        <ClientOnly>
            <div class="main_content_wrapper">
                <Home v-if="$page.frontmatter.isHome" />
                <EcoloApp v-if="$page.frontmatter.isEcoloApp" />
                <MoreNotices v-if="$page.frontmatter.isMoreNotices" />
                <Contact></Contact>
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
import EcoloApp from "@theme/components/application/EcoloApp.vue";
import MoreNotices from "@theme/components/notice/MoreNotices.vue";
import Footer from "@theme/components/Footer.vue";
import Contact from "@theme/components/common/Contact.vue";
import cfg from "../../config.json";

export default {
    name: "Layout",
    components: {
        Navigation,
        Home,
        EcoloApp,
        MoreNotices,
        Contact,
        Footer
    },

    computed: {
        showMd() {
            return Object.keys(this.$page.frontmatter).length === 0;
        },
    },
    mounted() {
        // 友盟统计添加
        const script = document.createElement("script");
        script.src = `https://s4.cnzz.com/z_stat.php?id=${cfg.umengId}&web_id=${cfg.umengWebId}`;
        script.language = "JavaScript";
        document.body.appendChild(script);
    },
};
</script>
<style lang="stylus">
.theme-container {
    width: 100%;
    height: 100%;
    .web_logo {
        display: none;
    }
    .web_logo_mobile {
        display: none;
    }
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

                h1,h2,h3,h4,h5,h6 {
                    font-weight: 600;
                    a {
                        display: none;
                    }
                }
                h1 {
                    font-size: 20px;
                    color: #000000;
                    line-height: 26px;
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
                        color: $highlightDetailColor;
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
