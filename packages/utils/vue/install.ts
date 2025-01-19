import { SFCWithInstall } from "./typescript";
//使用泛型,你怎么知道他有install方法呢?可以用vue提供的plugin类型来类型断言
export function withInstall<T>(main: T) {
  (main as SFCWithInstall<T>).install = (app: any): void => {
    const { name } = main as unknown as { name: string };
    app.component(name, main);
  };
  return main as SFCWithInstall<T>;
}
