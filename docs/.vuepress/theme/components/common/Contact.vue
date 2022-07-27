<template>
    <div class="contact_container">
        <div class="contact_img">
            <img src="../../assets/contact.png" alt="">
        </div>
        <div class="qrcode_container">
            <div class="qrcode">
                <img src="../../assets/contact_qrcode.png" alt=""/>
            </div>
            <p class="qrcode_text">·文昌链小助手·</p>
            <div class="email_container">
                <i class="iconfont icon-email"></i>
                <span>avata@bianjie.ai</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Contact"
};
</script>
<style lang='stylus' scoped>
.contact_container {
    position: fixed;
    right: 3.2rem;
    bottom: 13.2rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    @media(max-width: 1100px) {
        right: 0.8rem;
    }
    @media(max-width: 500px) {
        display: none;
    }
    &:hover {
        .qrcode_container {
            display: block;
        }
    }
    .contact_img {
        width: 4rem;
        height: 13rem;
        img {
            height: 100%;
        }
    }
    .qrcode_container {
        display: none;
        position: absolute;
        right: 5.2rem;
        box-sizing: border-box;
        padding: 2rem;
        background: #fff;
        box-shadow: 0 0 1.2rem 0 rgba(7, 24, 78, 0.08);
        border-radius: 0.4rem;
        border: 0.1rem solid #E1E5F4;
        .qrcode {
            width: 17rem;
            height: 17rem;
            img {
                height: 100%;
            }
        }
        .qrcode_text {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 0.6rem;
            font-size: $fontSize14;
            font-weight: $fontWeight600;
            color: #000000;
            line-height: 2.4rem;
            &::after {
                content: '';
                display: block;
                margin-top: 1.2rem;
                width: 12rem;
                height: 0.1rem;
                border: 0.1rem solid rgba(0, 0, 0, 0.1);
            }
        }
        .email_container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.1rem;
            font-size: $fontSize14;
            font-weight: $fontWeight600;
            color: #000000;
            line-height: 2.4rem;
            .iconfont {
                margin-right: 0.8rem;
                font-size: 1.7rem;
                color: $highlightDetailColor;
            }
        }
    }
}
</style>
