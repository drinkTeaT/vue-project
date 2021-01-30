import Vue from "vue"
import Router from "vue-router"
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/data",
            name: 'data',
            component: 父子通信
        },
        {
            path: "/",
            name: "test",
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
