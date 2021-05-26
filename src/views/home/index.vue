<template>
  <el-container class="home-container">
    <el-header class="my-header">
      <span class="cmri"></span>
      <span class="text">视频边缘智能平台</span>
      <el-dropdown style="float: right" @command="handleCommand">
        <span class="el-dropdown-link">
          <img
            style="vertical-align: middle"
            width="30"
            height="30"
            :src="avatar"
            alt
          />
          <b style="vertical-align: middle; padding-left: 5px">{{ name }}</b>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-setting" command="setting"
            >个人设置</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-unlock" command="logout"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside class="my-aside" width="218px">
        <el-menu
          router
          style="border-right: none"
          :default-active="$route.path"
          background-color="#002033"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse-transition="false"
        >
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">边缘节点</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-chat-round"></i>
              <span>镜像管理</span>
            </template>
            <el-menu-item index="/sysadmin/task">用户管理</el-menu-item>
            <el-menu-item index="/sysadmin/result">市场镜像</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-chat-round"></i>
              <span>容器管理</span>
            </template>
            <el-menu-item index="/sysadmin/task">容器模板</el-menu-item>
            <el-menu-item index="/sysadmin/result">容器部署</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-chat-round"></i>
              <span>云边消息</span>
            </template>
            <el-menu-item index="/sysadmin/task">节点配置</el-menu-item>
            <el-menu-item index="/sysadmin/result">消息下发</el-menu-item>
          </el-submenu>
          <el-menu-item index="/comment">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">数据分析</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <!-- 二级路由显示的位置 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import eventBus from "@/eventBus";
export default {
  data() {
    return {
      // collapse: false,
      avatar: "",
      name: ""
    };
  },
  created() {},
  methods: {
    // toggleMenu() {
    //   this.collapse = !this.collapse;
    // },
    // 1. 使用的是 click 事件，dom的原生事件。
    // 2. 此时你绑定了一个原生事件给 组件el-dropdown-item
    // 3. 组件解析过后 这个标签是不存在 事件绑定无效
    // 4. 事件修饰符：@click.prevent 阻止浏览器默认行为  @click.native 绑定原生的事件
    setting() {
      this.$router.push("/setting");
    },
    logout() {
      // 清除sessionStorage中的hm74-toutiao
      window.sessionStorage.removeItem("hm74-toutiao");
      this.$router.push("/login");
    },
    handleCommand(command) {
      // command就是点击的选项中的command的值  setting/logout
      this[command]();
      // command === setting ===> this.setting()
      // command === logout ===> this.logout()
    }
  }
};
</script>

<style scoped lang="less">
.home-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .my-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      // background: #024 url(../../assets/images/logo_admin.png) no-repeat center /
      // 140px auto;
    }
    .close {
      // background-image: url(../../assets/images/logo_admin_01.png);
      // background-size: 36px auto;
    }
  }
  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    background: url("../../assets/images/home/headerRightBack.png") no-repeat
      center / 100% 100%;
    .text {
      vertical-align: middle;
      padding-left: 10px;
      display: inline-block;
      margin-top: -54px;
      color: #516c96;
      font-size: 22px;
    }
    .cmri {
      display: inline-block;
      width: 200px;
      height: 60px;
      background: url("../../assets/images/home/headerLeftNew.png") no-repeat
        center / 100% 100%;
    }
  }
}
</style>
