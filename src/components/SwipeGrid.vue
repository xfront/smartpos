<template>
    <v-carousel hide-delimiters >
        <v-carousel-item  v-for="(page, idx) in pageList" :key="idx">
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex  v-for="(e, idx2) in page"  :key="idx2" v-bind="{ [`xs${12/column}`]: true }">
                        <v-card flat tile :style="e.style" align-center="true">
                            <v-card-text :style="{color:e.style.color, fontSize: e.style.fontSize}">{{e.Label}}</v-card-text>
                            <v-card-media  :style="{width: e.width, height: e.height}" :src="e.img"/>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        props: [
            "itemList",
            "row",
            "column",
            "itemStyles",
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
                    let page = list.slice(i * pageSize, (i + 1) * pageSize);
                    for (let j = 0; j < page.length; j++)
                        page[j].style = this.itemStyles[j % this.itemStyles.length];
                    console.log("page length:"+ page.length);
                    ret.push(page);
                }

                return ret;
            }
        }
    }
</script>

<style>

</style>