<template>
    <div class="main-home">
        <p class="main-title">商户名：ABC</p>
        <swipe-grid class="top-grid" :itemList="appList.top" :row="1" :column="1" :itemStyles="topStyles"
                    :clickfunc="onClickItem"/>
        <swipe-grid class="body-grid" :itemList="appList.body" :row="2" :column="2" :itemStyles="bodyStyles"
                    :clickfunc="onClickItem"/>
        <swipe-grid class="bottom-grid" :itemList="appList.bottom" :row="1" :column="3"
                    :itemStyles="bottomStyles" :clickfunc="onClickItem"/>
    </div>
</template>

<style>
    .main-home {
        display: flex;
        flex-flow: column nowrap;
        justify-content: stretch;
        align-items: stretch;
        height: 100%;
        width: 100%;
        margin: 0px;
    }

    .main-title {
        text-align: center;
        font-weight: bold;
        margin: 0px;
        flex: 0 1 auto !important;
    }

    .top-grid {
        margin: 0px;
        height: auto;
        flex: 0 2 auto !important; /* default 0 */
    }

    .body-grid {
        margin: 0px;
        height: 48%;
        flex: 1 1 auto !important; /* default 0 */
    }

    .bottom-grid {
        margin: 0px;
        height: auto;
        flex: 0 2 auto !important; /* default 0 */
    }
</style>

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
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        fontSize: "50px",
                        color: "blue",
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "center",
                        alignItems: "stretch"
                    }
                ],
                bodyStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        fontSize: "30px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        fontSize: "30px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #fd4033, #fd4033)",
                        fontSize: "30px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #5ca94a, #5ca94a)",
                        fontSize: "30px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }
                ],
                bottomStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        fontSize: "28px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        fontSize: "28px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        fontSize: "28px",
                        color: "white",
                        display: "flex",
                        flexFlow: "column nowrap",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                ],
                posInfo: {merchantName: ""},
                defaultList: [{
                    "IsNative": true,
                    "PkgName": "com.plutuspay.poscashier",
                    "LevelIndex": -1,
                    "IconPath": "icon/1495524990579_135_135_.png",
                    "Label": "收银",
                    "AppID": 3,
                    "DisplayIndex": 1
                }, {
                    "IsNative": false,
                    "WebUrl": "conf.js",
                    "LevelIndex": 2,
                    "IconPath": "icon/1495525016330_84_84_.png",
                    "Label": "设置",
                    "AppID": 8,
                    "DisplayIndex": 4
                },
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
            setTimeout(() => {
                this.defaultList = [{
                    "AppID": 3,
                    "IsNative": true,
                    "Label": "收银",
                    "WebUrl": null,
                    "IconPath": "icon/1495524990579_135_135_.png",
                    "PkgName": "com.plutuspay.poscashier",
                    "DisplayIndex": 1,
                    "LevelIndex": -1
                }, {
                    "AppID": 8,
                    "IsNative": false,
                    "Label": "设置",
                    "WebUrl": "conf.js",
                    "IconPath": "icon/1495525016330_84_84_.png",
                    "PkgName": null,
                    "DisplayIndex": 4,
                    "LevelIndex": 2
                }, {
                    "AppID": 13,
                    "IsNative": false,
                    "Label": "发券",
                    "WebUrl": "javascript:alert(\"H5应用开发中...\")",
                    "IconPath": "icon/1495525040581_116_91_.png",
                    "PkgName": null,
                    "DisplayIndex": 5,
                    "LevelIndex": 1
                }, {
                    "AppID": 14,
                    "IsNative": false,
                    "Label": "验券",
                    "WebUrl": "javascript:alert(\"H5应用开发中...\")",
                    "IconPath": "icon/1495525047800_116_116_.png",
                    "PkgName": null,
                    "DisplayIndex": 6,
                    "LevelIndex": 1
                }, {
                    "AppID": 18,
                    "IsNative": true,
                    "Label": "兴e付",
                    "WebUrl": "",
                    "IconPath": "icon/1495525055831_118_118_.png",
                    "PkgName": "cn.swiftpass.enterprise.a8.pos.ybx.ys",
                    "DisplayIndex": 7,
                    "LevelIndex": 1
                }];
            }, 3000);
            //this.fetchDesktop()
        },
        methods: {
            onClickItem: function (e) {
                console.log("click:", e);
                if (!e.IsNative)
                    window.location = e.WebUrl;
            },
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
                    else {
                        ret.body.push(o);
                        //ret.body.push(o);
                    }
                }

                //conf.WebUrl = "conf.js"
                ret.bottom.push(conf);
                return ret;
            }
        }
    }
</script>
