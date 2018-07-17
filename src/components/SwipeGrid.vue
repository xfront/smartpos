<template>
    <f7-swiper :pagination="pageList.length > 1"  :params="{loop: true, speed:800, spaceBetween:0}">
        <f7-swiper-slide class="grid-page" v-for="(page,i) in pageList" :key="i">
            <f7-row class="grid-row" no-gap v-for="(row,j) in page" :key="100*(i+1)+j">
                <f7-col :style="{margin: 0}" v-for="(e,k) in row" :key="1000*(i+1)+10*(j+1)+k" :width="Math.round(100/column)">
                    <f7-card :style="e.style" @click="clickfunc(e)">
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

<script>
    export default {
        props: [
            "itemList",
            "row",
            "column",
            "itemStyles",
            "clickfunc"
        ],
        computed: {
            pageList: function () {
                return this.split(this.itemList, this.row, this.column);
            }
        },

        methods: {
            split: function (list, r, c) {
                let ret = [];
                let pageSize = r * c;

                for (let i = 0; i < Math.ceil(list.length / pageSize); ++i) {
                    let t = [];
                    let page = list.slice(i * pageSize, (i + 1) * pageSize);
                    let idx = 0,
                        rows = Math.ceil(page.length / c);
                    for (let j = 0; j < rows; j++) {
                        let row = page.slice(j * c, (j + 1) * c);
                        for (let k = 0; k < row.length; k++) {
                            row[k].style = this.itemStyles[idx++ % this.itemStyles.length];
                        }
                        t.push(row);
                        console.log('row:', row)
                    }
                    ret.push(t);
                    console.log('page:', t)
                }
                console.log("all:", ret);
                return ret;
            }
        }
    }
</script>

<style scoped>
    .grid-page {
        display: flex;
        flex-flow: column nowrap;
        justify-content: stretch;
        align-items: stretch;
        height: 100%;
        width: 100%;
        margin: auto;
    }

    .grid-row {
        flex: 1 1 auto;
        margin: 1px;
    }
</style>