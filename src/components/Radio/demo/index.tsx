import React from 'react';
import Icon from '../../Icon';
import Radio from '../index';

const RadioDemo = ():JSX.Element => {
  return (
    <>
      <Radio>单选按钮</Radio>
      <Radio checkedColor="red">自定义颜色</Radio>
      <Radio value="myValue">自定值</Radio>
      <Radio disabled>禁止点击</Radio>
      <Radio disabled defaultChecked>禁止点击</Radio>
      <Radio checked>默认选中</Radio>
      <Radio defaultChecked>默认选中</Radio>
      <Radio size="24">自定义大小</Radio>
      <Radio shape="square">方形radio</Radio>
      <Radio shape="square" size="25">方形自定义大小</Radio>
      <Radio customeShape={<Icon name="like" size="15"/>}>自定义选中形状</Radio>
      <Radio shape='square' customeShape={<Icon name="like" size="15"/>}>自定义选中形状</Radio>
    </>
  );
}

export default RadioDemo;