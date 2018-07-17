<template>
    <f7-page>
        <!-- FAB Right Bottom (Orange) -->
        <f7-fab position="right-bottom" slot="fixed" color="orange">
            <f7-icon ios="f7:add" md="material:add"></f7-icon>
            <f7-icon ios="f7:close" md="material:close"></f7-icon>
            <f7-fab-buttons position="top">
                <f7-fab-button label="Action 1" @click="fetchDesktop()"> 1</f7-fab-button>
                <f7-fab-button label="Action 2">2</f7-fab-button>
            </f7-fab-buttons>
        </f7-fab>

        <div class="wrapper">
            <p class="main-title">商户名：ABC</p>
            <swipe-grid class="top-grid" :itemList="appList.top" :row="1" :column="1" :itemStyles="topStyles"
                        :clickfunc="onClickItem"/>
            <swipe-grid class="body-grid" :itemList="appList.body" :row="2" :column="2" :itemStyles="bodyStyles"
                        :clickfunc="onClickItem"/>
            <swipe-grid class="bottom-grid" :itemList="appList.bottom" :row="1" :column="3" :itemStyles="bottomStyles"
                        :clickfunc="onClickItem"/>
        </div>
    </f7-page>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-flow: column nowrap;
        justify-content: stretch;
        align-items: stretch;
        align-content: stretch;
        height: 100%;
        width: 100%;
        margin: auto;
    }

    .wrapper > * {
        padding: 0px;
        flex: 1 100%;
    }

    .main-title {
        flex: 1 2 auto;
        text-align: center;
        font-weight: bold;
        margin: 0px;
    }

    .top-grid {
        width: 100%;
        flex: 3 2 auto; /* default 0 */
    }

    .body-grid {
        width: 100%;
        max-height: 80%;
        flex: 10 3 auto; /* default 0 */
    }

    .bottom-grid {
        width: 100%;
        flex: 2 2 auto; /* default 0 */
    }
</style>

<script>
    import SwipeGrid from '@/components/SwipeGrid.vue'; // @ is an alias to /src
    const CASHIER_HOST = "https://120.78.29.7:16803/PosCashier/";
    const APP_HOST = "https://app.plutuspay.com/";

    export default {
        data: function () {
            return {
                topStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        borderRadius: "8px",
                        fontSize: "40px",
                        color: "white",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        borderRadius: "8px",
                        fontSize: "40px",
                        color: "blue",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "stretch",
                        margin: "3px"
                    }
                ],
                bodyStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        borderRadius: "8px",
                        fontSize: "25px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        borderRadius: "8px",
                        fontSize: "25px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #fd4033, #fd4033)",
                        borderRadius: "8px",
                        fontSize: "25px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #5ca94a, #5ca94a)",
                        borderRadius: "8px",
                        fontSize: "25px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    }
                ],
                bottomStyles: [
                    {
                        backgroundImage: "linear-gradient(to top, #ff6201, #ff6201)",
                        borderRadius: "8px",
                        fontSize: "20px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #01a480, #01a480)",
                        borderRadius: "8px",
                        fontSize: "20px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    },
                    {
                        backgroundImage: "linear-gradient(to top, #ffa001, #ffa001)",
                        borderRadius: "8px",
                        fontSize: "20px",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "3px"
                    }
                ],
                posInfo: {merchantName: ""},
                defaultList: []
            }
        },

        components: {
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
                    "AppID": 14,
                    "IsNative": false,
                    "Label": "验券",
                    "WebUrl": "javascript:alert(\"H5应用开发中...\")",
                    "IconPath": "icon/1495525047800_116_116_.png",
                    "PkgName": null,
                    "DisplayIndex": 6,
                    "LevelIndex": 1
                }];
            }, 3000);
            //this.fetchDesktop()
        },
        methods: {
            onClickItem: function (e) {
                console.log("click:" + e);
                navigator.open({
                    url: e.WebUrl,
                    animated: "true"
                });
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
                        ret.bottom.push(o);
                        continue;
                    }

                    if (o.DisplayIndex == 1) ret.top.push(o);
                    else if (o.DisplayIndex > 1 && o.DisplayIndex < 5) ret.bottom.push(o);
                    else ret.body.push(o);
                }

                //conf.WebUrl = "conf.js"

                return ret;
            }
        },

        mounted() {
            let self = this;
            let router = self.$f7router;

            document.addEventListener("backbutton", (e) => {
                //let ontop = router.currentRoute.path === '/';
                let ontop = router.history.length == 1;
                console.log("before: " + JSON.stringify(router.history))
                router.back();
                console.log("after: " + JSON.stringify(router.history))
                if (ontop) {
                    if (confirm("Do you want to Exit!")) {
                        navigator.app.clearHistory();
                        navigator.app.exitApp();
                    }
                }

            }, false);
        },
    }

</script>
