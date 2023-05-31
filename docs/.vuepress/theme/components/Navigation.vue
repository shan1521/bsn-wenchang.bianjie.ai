<template>
    <div class="navigation_content_wrapper">
        <div class="navigation_content">
            <div class="navigation_content_left">
                <div class="navigation_img_content" @click="toHome">
                    <img class="logo" src="../assets/wenchang_logo.png" alt="" />
                </div>
            </div>
            <ul class="navigation_content_right">
                <li
                    v-if="index !== 6"
                    class="navigation_list_item"
                    v-for="(item, index) in navigationList"
                    :key="index"
                    @click="changeIndex(index)"
                >
                    <div :class="currentIndex === index ? 'line' : ''"></div>
                    <a
                        v-show="item.target === '_blank'"
                        class="navigation_item"
                        :class="index === 5 ? 'router_link_item' : ''"
                        :href="item.link"
                        :target="item.target"
                        rel="noopener noreferrer"
                        >{{ item.text }}</a
                    >
                    <router-link
                        v-show="item.target !== '_blank'"
                        class="navigation_item"
                        :class="
                            currentIndex === index ? 'router_link_item' : ''
                        "
                        :to="item.link"
                        :target="item.target"
                        rel="noopener noreferrer"
                        >{{ item.text }}</router-link
                    >
                </li>
            </ul>
        </div>
        <div class="mobile_navigation_container">
            <div class="mobile_navigation_content">
                <div class="mobile_navigation_logo" @click="toHome">
                    <img class="logo" src="../assets/wenchang_logo.png" alt="" />
                </div>
                <div class="mobile_menu_icon" @click="isShowMobileMenu">
                    <span class="iconfont icon-menu"></span>
                </div>
            </div>
            <ul
                class="mobile_navigation_content_right"
                v-show="flShowMobileMenu"
            >
                <li
                    v-if="index !== 6"
                    class="mobile_navigation_list_item"
                    v-for="(item, index) in navigationList"
                    :key="index"
                    @click="changeIndex(index)"
                >
                    <div
                        :class="currentIndex === index ? 'mobile_line' : ''"
                    ></div>
                    <a
                        v-show="item.target === '_blank'"
                        class="mobile_navigation_item"
                        :class="index === 5 ? 'mobile_router_link_item' : ''"
                        :href="item.link"
                        :target="item.target"
                        rel="noopener noreferrer"
                        >{{ item.text }}</a
                    >
                    <router-link
                        v-show="item.target !== '_blank'"
                        class="mobile_navigation_item"
                        :to="item.link"
                        @click.native="closeMobileMenu"
                        :target="item.target"
                        rel="noopener noreferrer"
                        >{{ item.text }}</router-link
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            navigation: [],
            flShowMobileMenu: false,
        };
    },
    created() {
        this.navigation = this.$site.themeConfig.nav;
    },
    computed: {
        currentIndex() {
            return +this.$store.state.currentIndex;
        },
        navigationList() {
            return this.navigation;
        },
    },
    methods: {
        toHome() {
            this.$router.push("/");
            this.$store.commit("currentIndex", 0);
        },
        changeIndex(index) {
            if (this.currentIndex !== index && index !== 2 && index !== 3 && index !== 4 && index !== 5) {
                this.$store.commit("currentIndex", index);
                localStorage.setItem("currentIndex", JSON.stringify(index));
            }
        },
        isShowMobileMenu() {
            this.flShowMobileMenu = !this.flShowMobileMenu;
        },
        closeMobileMenu() {
            this.flShowMobileMenu = false;
        },
    },
};
</script>

<style lang="stylus">
.navigation_content_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $navbarHeight;
    background: $whiteColor;
    border-bottom: 0.1rem solid $borderLineColor;
    z-index: 10;

    .navigation_content {
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        margin: 0 auto;
        max-width: $contentWidth;
        height: $navbarHeight;

        .navigation_content_left {
            display: flex;
            align-items: center;
            height: $navbarHeight;
            @media (max-width: 1200px) {
                padding-left: 4.8rem;
            }
            @media (max-width: 375px) {
                padding-left: 1.6rem;
            }

            .navigation_img_content {
                display: flex;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }

                .logo {
                    height: 4.4rem;
                    vertical-align: middle;
                }
            }
        }

        .navigation_content_right {
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            height: $navbarHeight;
            list-style: none;
            font-size: $fontSize16;
            @media (max-width: 1200px) {
                padding-right: 4.8rem;
            }
            @media (max-width: 960px) {
                display: none;
            }

            .navigation_list_item {
                position: relative;
                line-height: 100%;

                &:last-child {
                    .navigation_item {
                        padding-right: 0;
                    }

                    .line {
                        transform: translateX(-50%);
                    }
                }

                .line {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 11.2rem;
                    height: 0.4rem;
                    background: $highlightDetailColor;
                }

                .navigation_item {
                    display: inline-block;
                    padding: 2.05rem 3rem;
                    line-height: 2.2rem;
                    font-weight: $fontWeight400;
                    color: $blackColor;
                }

                .router_link_item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 2.2rem;
                    line-height: 2.2rem;
                    font-weight: $fontWeight600;
                    color: $highlightDetailColor;
                }
            }
        }
    }

    .mobile_navigation_container {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: $navbarHeight;
        background: $whiteColor;
        border-bottom: 0.1rem solid $borderLineColor;
        z-index: 10;
        @media (max-width: 960px) {
            display: block;
        }

        .mobile_navigation_content {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin: 0 auto;
            height: $navbarHeight;

            @media (max-width: 960px) {
                padding-left: 4.8rem;
            }
            @media (max-width: 432px) {
                padding-left: 1.6rem;
            }

            .mobile_navigation_logo {
                display: flex;
                align-items: center;
                cursor: pointer;
                .logo {
                    height: 4.4rem;
                    vertical-align: middle;
                }
            }

            .mobile_menu_icon {
                cursor: pointer;
                @media (max-width: 960px) {
                    padding-right: 4.8rem;
                }
                @media (max-width: 432px) {
                    padding-right: 1.6rem;
                }
                .iconfont {
                    font-size: 24px;
                    color: $highlightDetailColor;
                }
            }
        }

        .mobile_navigation_content_right {
            margin: 0;
            width: 100%;
            background: $whiteColor;
            list-style: none;
            

            .mobile_navigation_list_item {
                position: relative;
                width: 100%;
                border-top: 0.1rem solid #E8EBF5;

                .mobile_line {
                    position: absolute;
                    left: 0;
                    width: 0.4rem;
                    height: 100%;
                    background: $highlightDetailColor;
                }

                .mobile_navigation_item {
                    box-sizing: border-box;
                    display: inline-block;
                    padding: 1.2rem 0 1.2rem 4.8rem;
                    width: 100%;
                    color: $blackColorOpacity1;
                }

                .mobile_router_link_item {
                    color: $highlightDetailColor;
                    background: rgba(112, 101, 255, 0.04);
                }
            }
        }
    }
}
</style>