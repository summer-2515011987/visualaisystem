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
        name: "home",
        // hidden: true,判断路由入口是否可见的开关
        component: () =>
            import ("@/views/setMain"),
        redirect: "/home/node",
        meta: { title: "系统管理", icon: "ums", isLeaf: false },
        // 子路由
        children: [{
                path: "/home/node",
                name: "node",
                component: () =>
                    import ("@/views/node/index"),
                meta: { title: "边缘节点", icon: "ums-admin", isLeaf: true }
            },
            {
                path: "/home/userManagement",
                name: "userManagement",
                component: () =>
                    import ("@/views/imageManagement/userManagement"),
                meta: { title: "用户管理" }
            },
            {
                path: "/home/marketImage",
                name: "userManagement",
                component: () =>
                    import ("@/views/imageManagement/marketImage"),
                meta: { title: "市场镜像" }
            },
            {
                path: "/home/containerTem",
                name: "containerTem",
                component: () =>
                    import ("@/views/containerManage/containerTem"),
                meta: { title: "容器模板" }
            },
            {
                path: "/home/containerDeploy",
                name: "containerDeploy",
                component: () =>
                    import ("@/views/containerManage/containerDeploy"),
                meta: { title: "容器部署" }
            },
            {
                path: "/home/nodeConfig",
                name: "nodeConfig",
                component: () =>
                    import ("@/views/cloudNews/nodeConfig"),
                meta: { title: "节点配置" }
            },
            {
                path: "/home/messageDistribution",
                name: "messageDistribution",
                component: () =>
                    import ("@/views/cloudNews/messageDistribution"),
                meta: { title: "消息下发" }
            },
            {
                path: "/home/dataAnalysis",
                name: "dataAnalysis",
                component: () =>
                    import ("@/views/dataAnalysis"),
                meta: { title: "数据分析" }
            }
        ]
    },
    // // 详情页
    // {
    //     path: "/Homedetail:id",
    //     name: "Homedetail",
    //     component: () =>
    //         import ("@/views/Homedetail.vue")
    // }
    { path: "*", redirect: "/404", hidden: true }
];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes
});
export default router;