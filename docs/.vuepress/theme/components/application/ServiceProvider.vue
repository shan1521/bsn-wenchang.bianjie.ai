<template>
    <div class="container">
        <div class="title">{{providers.title}}</div>
        <div class="content">
            <div v-for="(item,index) in providers.providerList" :key="index" class="content-item">
                <img :src="item.imgLink" class="content-item-provider"></img>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Providers',
    props: ['providers'],
}
</script>
<style lang="stylus" scoped >
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .title {
        font-size: $fontSize24;
        font-weight: 600;
        color: #000000;
        line-height: 2.4rem;
        text-align: center;
        margin-bottom: 44px;
    }
    .content {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 10px;
        max-width: 1080px;
        margin-bottom: 80px;
        &-item {
            display: flex;
            width: 255px;
            height: 88px;
            justify-content: center;
            align-items: center;
            border: 1px solid #E8EBF5;
            border-radius: 4px;
            &-provider {
                height: 55%;
            }
        }
        
        @media(max-width: 1030px) {
            max-width: 805px;
            grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 768px) {
            max-width: 530px;
            grid-template-columns: repeat(2, 1fr)
        }
    }
}

</style>