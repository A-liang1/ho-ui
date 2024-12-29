// 用来整合组件的 最终实现导出组件
import _Icon from "./src/icon.vue";
import { withInstall } from "@ho-liang/utils";

const HoIcon = withInstall(_Icon);

export default HoIcon; // 既可以通过app.use()安装，也可以通过组件引入
export * from "./src/icon";

// 这里添加的类型，可以在模版中解析
declare module "vue" {
  export interface GlobalComponents {
    HoIcon: typeof HoIcon;
  }
}
