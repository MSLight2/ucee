### 一个React组件库，UI是模仿Vant。
# 快速上手

## 安装
```javascript
$ npm install --save ucee-mobile
# or
$ yarn add ucee-mobile
```

## 引入
直接引入组件即可，样式会自动加载
```javascript
import { Button } from 'ucee-mobile'
```

## 兼容
如果你不做任何额外的处理，那么 ucee-mobile css默认的兼容性为 iOS Safari >= 10 和 Chrome >= 51,
Javascript兼容性为 iOS Safari >= 10 和 Chrome >= 49

你也可以通过 babel 配置设置兼容性
```javascript
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "9.1"
        }
      }
    ]
  ]
}
```

项目使用CRA创建。使用Jest测试组件，使用dumi生成文档。

东西虽小，但五脏俱全。

[使用文档](https://mslight2.github.io/ucee/)

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