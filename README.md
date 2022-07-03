### 一个React组件库，UI是模仿Vant。
项目使用CRA创建。使用Jest测试组件

## 已完成组件
- [x] Button
- [x] Cell
- [x] CllGroup
- [x] Checkbox
- [x] CheckboxGroup
- [x] Filed
- [x] Icon
- [x] Loading
- [x] Radio
- [x] RadioGroup
- [x] Rate
- [x] Search
- [x] Tag
- [x] CellGroup
- [x] Cell

- 已完成的组件测试覆盖率为100%

> TODO: 打包 & 自动生成使用文档

## FAQ
## 包安装问题：
- yarn安装node-sass失败
```js
// 执行
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g 
yarn
```
- 切换源依然安装失败，启用cnpm
```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i
```