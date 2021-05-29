<template>
  <div class="node-container">
     <el-card class="box-card" >
        <detail-tab
          :tabOption="tabOption"
          :currentView="currentView"
          @click="swtichTab"
          style="background:#fff;margin:20px;"
        >
          <div :slot="currentView">
            <template v-for="item in tabOption">
              <component
                v-if="currentView == item.name"
                :is="item.name"
                :key="item.name"
                :ref="item.name"
              ></component>
            </template>
          </div>
        </detail-tab>
      </el-card>
  </div>
</template>

<script>
import DetailTab from "@/components/DetailTab";
import applicationModule from "./components/applicationModule"
import supportStaff from "./components/supportStaff"
export default {
  name: "",
  components: {
     DetailTab,
     applicationModule,
     supportStaff
  },
  props: {},
  data() {
    return {
        currentView: "applicationModule",
         tabOption: [
        {
          label: "系统应用模块",//tab组件中的名字
          name: "applicationModule",// tab组件的对应项
          view: ""
        },
        {
          label: "系统支撑人员",
          name: "supportStaff",
          view: ""
        }
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    swtichTab(tab) {
      this.currentView = tab.name;
    },
  }
};
</script>

<style scoped lang="less"></style>
