<template>
    <!--div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(page,i) in pageList" :key="i">
                <f7-row class="grid-row" no-gap v-for="(row,j) in page" :key="100*(i+1)+j">
                    <f7-col  v-for="(e,k) in row" :key="1000*(i+1)+10*(j+1)+k" :width="Math.round(100/column)">
                        <f7-card :style="e.style" @click="clickfunc(e)">
                            <img :style="{margin: 0, height: e.height, width: e.width}" :src="e.img"/>
                            <p :style="{margin: 0, color:e.style.color, fontSize: e.style.fontSize}">
                                {{e.Label}}
                                <f7-badge color="blue">5</f7-badge>
                            </p>
                        </f7-card>
                    </f7-col>
                </f7-row>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div-->

    <f7-swiper pagination ref="swiperRef" :params="{loop: true, speed:800, spaceBetween:0}">
        <f7-swiper-slide class="grid-page" v-for="(page,i) in pageList" :key="i">
            <f7-row class="grid-row" no-gap v-for="(row,j) in page" :key="100*(i+1)+j">
                <f7-col v-for="(e,k) in row" :key="1000*(i+1)+10*(j+1)+k" :width="Math.round(100/column)">
                    <f7-card :style="e.style">
                        <img :style="{margin: 0, height: e.height, width: e.width}" :src="e.img"/>
                        <p :style="{margin: 0, color:e.style.color, fontSize: e.style.fontSize}">
                            {{e.Label}}
                            <f7-badge color="blue">5</f7-badge>
                        </p>
                    </f7-card>
                </f7-col>
            </f7-row>
        </f7-swiper-slide>
    </f7-swiper>
</template>

<style scoped>
    .swiper-wrapper{
        height: 100%;
        width: 100%;
    }
    .grid-page {
        display: flex;
        flex-flow: column nowrap;
        justify-content: stretch;
        align-items: stretch;
        align-content: stretch;
        height: 100%;
        width: 100%;
    }

    .grid-row {
        flex: 1 1 auto;
        margin: 0px;
    }
</style>

<script>
    export default {
        props: [
            "itemList",
            "row",
            "column",
            "itemStyles",
            "clickfunc"
        ],
        watch: {
            pageList: function () {
                setTimeout(() => {
                    this.$$('.card').on('click',function (e){
                        console.log("click", e)
                    });
                    if (this.$refs.swiperRef.swiper) {
                        console.log("update");
                        this.$refs.swiperRef.swiper.update()
                    }
                }, 200);
            }
        },

        computed: {
            pageList: function () {
                let x= this.split(this.itemList, this.row, this.column);
                console.log("app List:" + JSON.stringify(x));
                return x;
            }
        },

        methods: {
            split: function (list, r, c) {
                let ret = [];
                let pageSize = r * c;

                for (let i = 0; i < Math.ceil(list.length / pageSize); ++i) {
                    let page = list.slice(i * pageSize, (i + 1) * pageSize);
                    ret.push(page);
                }
                console.log("all:", ret);
                return ret;
            }
        }
    }
</script>