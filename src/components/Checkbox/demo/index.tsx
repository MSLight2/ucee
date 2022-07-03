import React from 'react';
import Icon from '../../Icon';
import Checkbox from '../index';

const CheckboxDemo: React.FC = () => {
  return (
    <>
      <Checkbox>checkbox</Checkbox>
      <Checkbox checkedColor="red">自定义颜色</Checkbox>
      <Checkbox value="myValue">自定值</Checkbox>
      <Checkbox disabled>禁止点击</Checkbox>
      <Checkbox disabled defaultChecked>禁止点击</Checkbox>
      <Checkbox checked>默认选中</Checkbox>
      <Checkbox defaultChecked>默认选中</Checkbox>
      <Checkbox size="24">自定义大小</Checkbox>
      <Checkbox shape="round">圆形checkbox</Checkbox>
      <Checkbox shape="round" size="25">圆形自定义大小</Checkbox>
      <Checkbox customeShape={<Icon name="like" size="15"/>}>自定义选中形状</Checkbox>
      <Checkbox shape='square' customeShape={<Icon name="like" size="15"/>}>自定义选中形状</Checkbox>
    </>
  );
}

export default CheckboxDemo;