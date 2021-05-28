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
            import ("@/views/setMain"),
        name: "home",
        meta: { title: "系统管理", icon: "ums", isLeaf: false },
        // 子路由
        children: [{
            path: "node",
            name: "node",
            component: () =>
                import ("@/views/node/index"),
            meta: { title: "边缘节点", icon: "ums-admin", isLeaf: true }
        }]
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