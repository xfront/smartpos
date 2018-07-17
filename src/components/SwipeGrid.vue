<template>
    <v-carousel light :cycle="false" hide-controls :hide-delimiters="pageList.length <= 1">
        <v-carousel-item v-for="(page, i) in pageList" :key="i">
            <v-container class="pa-1" fluid grid-list-md fill-height>
                <v-layout row wrap>
                    <v-flex v-for="(e,j) in page" :key="100*i+j" v-bind="{ [`xs${12/column}`]: true }">
                        <v-card raised :style="e.style" >
                            <img :style="{margin: 0, width: e.width, height: e.height}" :src="e.img"/>
                            <p :style="{margin: 0, color:e.style.color, fontSize: e.style.fontSize}">
                                {{e.Label}}
                            </p>
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
                    for (let j = 0; j < page.length; j++)
                        page[j].style = this.itemStyles[j % this.itemStyles.length];
                    ret.push(page);
                }

                return ret;
            }
        }
    }
</script>

<style>

</style>