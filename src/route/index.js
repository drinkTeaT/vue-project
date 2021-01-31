import Vue from "vue"
import Router from "vue-router"
import ComponentAB from "../components/test/ComponentAB";
import show from "../components/Show";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/data",
            name: 'data',
            component: ComponentAB
        },
        {
            path: "/show",
            name: 'show',
            component: show
        }
    ]
})
