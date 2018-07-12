<template>
    <f7-page class="display-flex">
        <f7-navbar>
            <f7-nav-left>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>My App</f7-nav-title>
            <f7-nav-right>
                <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
            </f7-nav-right>
        </f7-navbar>
        <f7-toolbar>
            <f7-link>Left Link</f7-link>
            <f7-link>Right Link</f7-link>
        </f7-toolbar>
        <f7-block strong>
            <p>Here is your blank Framework7 app. Let's see what we have here.</p>
        </f7-block>

        <f7-swiper class="align-self-center flex-shrink-1" pagination
                   :params="{loop:true, speed:800, spaceBetween: 20}">
            <f7-swiper-slide>
                <f7-block-title>Navigation</f7-block-title>
                <f7-list>
                    <f7-list-item link="/about/" title="About"></f7-list-item>
                    <f7-list-item link="/form/" title="Form"></f7-list-item>
                </f7-list>
            </f7-swiper-slide>
            <f7-swiper-slide>
                <f7-block-title>Modals</f7-block-title>
                <f7-block strong>
                    <f7-row>
                        <f7-col width="50">
                            <f7-button fill raised popup-open="#popup">Popup</f7-button>
                        </f7-col>
                        <f7-col width="50">
                            <f7-button fill raised login-screen-open="#login-screen">Login Screen</f7-button>
                        </f7-col>
                    </f7-row>
                </f7-block>
            </f7-swiper-slide>
            <f7-swiper-slide>
                <f7-block-title>Panels</f7-block-title>
                <f7-block strong>
                    <f7-row>
                        <f7-col width="50">
                            <f7-button fill raised panel-open="left">Left Panel</f7-button>
                        </f7-col>
                        <f7-col width="50">
                            <f7-button fill raised panel-open="right">Right Panel</f7-button>
                        </f7-col>
                    </f7-row>
                </f7-block>
            </f7-swiper-slide>
            <f7-swiper-slide>

                <f7-list>
                    <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about"
                                  title="Dynamic Route"></f7-list-item>
                    <f7-list-item link="/load-something-that-doesnt-exist/" title="Default Route (404)"></f7-list-item>
                </f7-list>
            </f7-swiper-slide>
            <f7-swiper-slide>
                <f7-block-title>No gap between columns</f7-block-title>
                <f7-block>
                    <f7-row no-gap>
                        <f7-col>50% (.col)</f7-col>
                        <f7-col>50% (.col)</f7-col>
                    </f7-row>
                    <f7-row no-gap>
                        <f7-col>25% (.col)</f7-col>
                        <f7-col>25% (.col)</f7-col>
                        <f7-col>25% (.col)</f7-col>
                        <f7-col>25% (.col)</f7-col>
                    </f7-row>
                    <f7-row no-gap>
                        <f7-col width="33">33% (.col-33)</f7-col>
                        <f7-col width="66">66% (.col-66)</f7-col>
                    </f7-row>
                    <f7-row no-gap>
                        <f7-col width="25">25% (.col-25)</f7-col>
                        <f7-col width="25">25% (.col-25)</f7-col>
                        <f7-col width="50">50% (.col-50)</f7-col>
                    </f7-row>
                </f7-block>
            </f7-swiper-slide>
        </f7-swiper>

        <!-- FAB Right Bottom (Orange) -->
        <f7-fab position="right-bottom" slot="fixed" color="orange">
            <f7-icon ios="f7:add" md="material:add"></f7-icon>
            <f7-icon ios="f7:close" md="material:close"></f7-icon>
            <f7-fab-buttons position="top">
                <f7-fab-button label="Action 1" @click="sayHi"> 1</f7-fab-button>
                <f7-fab-button label="Action 2">2</f7-fab-button>
            </f7-fab-buttons>
        </f7-fab>
    </f7-page>
</template>
<script>
    export default {
        methods: {
            sayHi: function (e) {
                this.$f7.dialog.alert('hi');
            }
            , obj2String: function (obj, L, M) {
                let level = !!L ? L: 0;
                let maxlevel = !!M ? M: 3;
                if (level >= maxlevel)
                    return "";
                //create an array that will later be joined into a string.
                let buf = [];

                //is object
                //    Both arrays and objects seem to return "object"
                //    when typeof(obj) is applied to them. So instead
                //    I am checking to see if they have the property
                //    join, which normal objects don't have but
                //    arrays do.
                if (typeof(obj) == "object" && (obj.join == undefined)) {
                    buf.push("{");
                    for (let prop in obj) {
                        let val = obj[prop];
                        let s = (val !== null && val !== undefined) ? this.obj2String(val, level++, maxlevel) : "null";
                        buf.push(prop, ": ", s, ",");
                    }
                    buf.push("}");
                    //is array
                } else if (typeof(obj) == "object" && !(obj.join == undefined)) {
                    buf.push("[")
                    for (let prop in obj) {
                        let val = obj[prop];
                        let s = (val !== null && val !== undefined) ? this.obj2String(val, level++, maxlevel) : "null";
                        buf.push(s, ",");
                    }
                    buf.push("]")
                    //is function
                } else if (typeof(obj) == "function") {
                    buf.push("function ", obj.name, "(){}")
                    //all other values can be done with JSON.stringify
                } else {
                    buf.push(obj.toString())
                }
                return buf.join("")
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
                    e.preventDefault();
                    if (confirm("Do you want to Exit!")) {
                        navigator.app.clearHistory();
                        navigator.app.exitApp();
                    }
                }

            }, false);
        },
    }
</script>
