<template>
    <div class="container">
        <div class="title">{{providers.title}}</div>
        <div class="content">
            <div v-for="(item,index) in providers.providerList" :key="index" class="content_item">
                <img :src="item.imgLink" class="content_item_provider"></img>
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
        margin-bottom: 4.4rem;
    }
    .content {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 1rem;
        max-width: 108rem;
        margin-bottom: 8rem;
        &_item {
            display: flex;
            width: 25.5rem;
            height: 8.8rem;
            justify-content: center;
            align-items: center;
            border: 0.1rem solid #E8EBF5;
            border-radius: 0.4rem;
            &_provider {
                height: 100%;
            }
        }
        
        @media(max-width: 1030px) {
            max-width: 80.5rem;
            grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 768px) {
            max-width: 53rem;
            grid-template-columns: repeat(2, 1fr)
        }
    }
}

</style>