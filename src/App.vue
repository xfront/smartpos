<template>
    <v-app>
        <v-layout row>
            <v-flex  xs12 sm6 offset-sm3 class="pa-1">
                <v-navigation-drawer app v-model="drawer">
                    <v-list dense>
                        <v-list-tile @click="route('/')">
                            <v-list-tile-action>
                                <v-icon>home</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Home</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile @click="route('/about')">
                            <v-list-tile-action>
                                <v-icon>info_outline</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>About</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>

                <v-content fluid style="height: 100%" class="pa-0">
                    <router-view class="pa-0">
                    </router-view>
                </v-content>

                <v-btn
                       fab
                       small
                       color="cyan accent-2"
                       bottom right fixed
                       @click.stop="drawer = !drawer">
                    <v-icon>add</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<style>
    body {
        background: #fafafa;
        padding-top: constant(safe-area-inset-top);
        padding-top: env(safe-area-inset-top);
        padding-bottom: constant(safe-area-inset-bottom);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: constant(safe-area-inset-left);
        padding-left: env(safe-area-inset-left);
        padding-right: constant(safe-area-inset-right);
        padding-right: env(safe-area-inset-right);
    }
</style>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        data() {
            return {
                drawer: false,
            };
        },
        methods: {
            route(path: string) {
                this.drawer = false;
                this.$router.push(path);
            },
        },
    });
</script>
