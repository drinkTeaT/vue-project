import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld";
import Cmf from "../components/Cmf";
import Cb from "../components/Cb";
import show from "../components/show";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/cf",
            name: 'data',
            component: HelloWorld
        },
        {
            path: "/cmf",
            name: 'cmf',
            component: Cmf
        },
        {
            path: "/cb",
            name: 'cb',
            component: Cb
        },
        {
            path: "/show",
            name: 'show',
            component: show
        }
    ]
})
