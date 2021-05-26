import Vue from "vue";
import VueRouter from "vue-router";
// import login from "@/views/login";
Vue.use(VueRouter);
const routes = [{
        path: "/",
        name: "login",
        component: () =>
            import ("@/views/login") //路由懒加载
    },
    {
        path: "/home",
        component: () =>
            import ("@/views/home"),
        // 子路由
        children: [
            { name: "welcome", path: "/", component: () =>
                    import ("@/views/welcome") }
        ]
    }
    // // 详情页
    // {
    //     path: "/Homedetail:id",
    //     name: "Homedetail",
    //     component: () =>
    //         import ("@/views/Homedetail.vue")
    // }
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;