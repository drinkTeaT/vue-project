import Vue from "vue"
import Router from "vue-router"
import ComponentB from "../components/test/ComponentB";
import 父子通信 from "../components/test/父子通信";

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
            component: ComponentB
        }
    ]
})
