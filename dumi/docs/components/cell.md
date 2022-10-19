---
toc: false
---
# Cell 单元格
单元格为列表中的单个展示项

> Cell 可以单独使用，也可以与 CellGroup 搭配使用，CellGroup 可以为 Cell 提供上下外边框。
## 示例
<code src="MdDemos/Cell/demo"></code>

## 属性
|属性           |说明             |类型                                                       |默认值          |
|---------------|----------------|-----------------------------------------------------------|---------------|
|title          |标题            |`React.ReactNode`                                          |`-`|
|titleWidth     |标题宽度         |`string \| number`                                         |`-`|
|label          |描述信息         |`string`                                                   |`-`|
|value          |单元格内容       |`string`                                                   |`-`|
|size           |单元格大小       |`'default' \| 'large'`                                     |`'default'`|
|icon           |单元格图标       |`React.ReactNode`                                          |`-`|
|border         |是否显示内边框   |`boolean`                                                  |`'true'`|
|center         |是否垂直居中     |`boolean`                                                  |`'false'`|
|url            |条状url         |`string`                                                    |`-`|
|isLink         |是否展示右侧箭头 |`boolean`                                                   |`'false'`|
|arrowDirection |右侧箭头方向     |`'right' \| 'up' \| 'down'`|`'right'`                      |
|className      |单元格类名       |`string`                                                   |`-`|
|titleClass     |单元格标题类名   |`string`                                                   |`-`|
|labelClass     |单元格信息类名   |`string`                                                   |`-`|
|valueClass     |单元格内容类名   |`string`                                                   |`-`|

## 事件
|事件名         |说明             |回调参数                          |
|---------------|----------------|----------------------------------|
|onClick        |点击单元格时触发 |`event`                           |