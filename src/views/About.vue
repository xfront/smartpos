<template>
    <v-card fluid>
        <swipe-grid :itemList="appList.top" :row="1" :column="1" :itemStyles="topStyles"/>
        <swipe-grid :itemList="appList.body" :row="2" :column="2" :itemStyles="bodyStyles"/>
        <swipe-grid :itemList="appList.bottom" :row="1" :column="3" :itemStyles="bottomStyles"/>
        <quick-menu/>
    </v-card>
</template>

<script>
    import QuickMenu from '@/components/QuickMenu.vue'; // @ is an alias to /src
    import SwipeGrid from '@/components/SwipeGrid.vue'; // @ is an alias to /src
    const CASHIER_HOST = "https://120.78.29.7:16803/PosCashier/";
    const APP_HOST = "https://app.plutuspay.com/";

    export default {
        data: function () {
            return {
                topStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        fontSize: "50px",
                        color: "white",
                        flexDirection: "row"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        fontSize: "50px",
                        color: "blue",
                        flexDirection: "row"
                    }
                ],
                bodyStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        fontSize: "30px",
                        color: "white"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        fontSize: "30px",
                        color: "white"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #fd4033, #fd4033)",
                        fontSize: "30px",
                        color: "white"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #5ca94a, #5ca94a)",
                        fontSize: "30px",
                        color: "white"
                    }
                ],
                bottomStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        fontSize: "28px",
                        color: "white"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        fontSize: "28px",
                        color: "white"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        fontSize: "28px",
                        color: "white"
                    }
                ],
                posInfo: {merchantName: ""},
                defaultList: [{
                    AppID: 118,
                    IsNative: true,
                    Label: "收银",
                    WebUrl: null,
                    IconPath: "icon/1524477813138_135_135_.png",
                    PkgName: "com.plutuspay.poscashier",
                    DisplayIndex: 1,
                    LevelIndex: -1
                },
                    {
                        AppID: 8,
                        IsNative: false,
                        Label: "设置",
                        WebUrl: "conf.js",
                        IconPath: "icon/1495525016330_84_84_.png",
                        PkgName: null,
                        DisplayIndex: 4,
                        LevelIndex: 2
                    }
                ]
            }
        },

        components: {
            QuickMenu,
            SwipeGrid,
        },
        computed: {
            appList: function () {
                return this.transList(this.defaultList);
            }
        },
        created: function () {
            this.fetchDesktop()
        },
        methods: {
            fetchDesktop: function () {
                let self = this;
                cordova.plugin.http.enableSSLPinning(true, function () {
                    console.log('success!');
                }, function (e) {
                    console.log('error :(' + e);
                });
                cordova.plugin.http.setDataSerializer('json')

                let GET_APP_LIST = CASHIER_HOST + "GetDesktop";
                cordova.plugin.http.post(GET_APP_LIST, {
                    sn: '98261730055876'
                }, {}, function (response) {
                    // prints 200
                    console.log(response.status);
                    try {// prints test
                        console.log(response.data);
                        let json = JSON.parse(response.data);
                        if (json.Code == 0) {
                            self.defaultList = json.Result.Apps;
                            console.log("apps:" + self.defaultList.length)
                        }
                    } catch (e) {
                        console.error('JSON parsing error');
                    }
                }, function (response) {
                    // prints 403
                    console.log(response.status);

                    //prints Permission denied
                    console.log(response.error);
                });
            },

            extract: function (e) {
                let imgurl =
                    e.IconPath == "" || e.IconPath == null
                        ? "icon/65923b41257844f38de3f9967efb5188_135_135_.png"
                        : e.IconPath;
                let abs = imgurl.startsWith("http://") || imgurl.startsWith("https://");
                let re = /\d+/g;
                let wh = imgurl.match(re);
                let w = wh != null ? wh.pop() : 200;
                let h = wh != null ? wh.pop() : 200;
                return {
                    width: w + "px",
                    height: h + "px",
                    img: abs ? imgurl : APP_HOST + imgurl
                };
            },

            transList: function (data) {
                data.sort((a, b) => {
                    a.DisplayIndex < b.DisplayIndex;
                });

                let ret = {top: [], body: [], bottom: []};
                let conf = null;
                for (let i = 0; i < data.length; ++i) {
                    let item = data[i];
                    let info = this.extract(item);
                    let o = Object.assign(item, info);
                    if (o.AppID == 8) {
                        //skip config
                        conf = o;
                        continue;
                    }

                    if (o.DisplayIndex == 1) ret.top.push(o);
                    else if (o.DisplayIndex > 1 && o.DisplayIndex < 5) ret.bottom.push(o);
                    else ret.body.push(o);
                }

                //conf.WebUrl = "conf.js"
                ret.bottom.push(conf);
                return ret;
            }
        }
    }
</script>

<style>

</style>