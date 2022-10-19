import React from 'react';
import { Icon, Filed , Button } from 'ucee-mobile';

const FieldDemo = ():JSX.Element => {
  return (
    <>
      <Filed label="文本" placeholder="请输入文本" />
      <Filed label="文本" placeholder="请输入文本" readonly value="只读文本" />
      <Filed label="文本" placeholder="请输入文本" disabled />
      <Filed label="文本" placeholder="请输入文本" inputAlign='right' />

      <div>type</div>
      <Filed type='password' label="密码" placeholder="请输入密码" border />
      <Filed type='number' label="数字" placeholder="请输入数字" />
      <Filed type='tel' label="手机号" placeholder="请输入手机号" />
      <Filed formatType='float' label="小数" placeholder="请输入小数" />
      <Filed formatType='integer' label="整数" placeholder="请输入整数" />

      <div>icon</div>
      <Filed label='图标' placeholder="请输入文本" leftIcon={<Icon name='mine' />} />
      <Filed label='图标' placeholder="请输入文本" clearable />
      <Filed label='图标' placeholder="请输入文本" rightIcon={<Icon name='search' />} />
      <Filed label='图标' placeholder="请输入文本" rightIcon={<Button type='primary' size='small'>发送验证码</Button>} />

      <div>type</div>
      <Filed label="onChange" placeholder="请输入文本" onChange={(e) => {
        console.log('onChange: ', e.target.value)
      }} />
      <Filed label="integer" placeholder="请输入数字" formatType='integer' onChange={(e) => {
        console.log('integer: ', e.target.value)
      }} />
      <Filed label="float" placeholder="请输入浮点数" formatType='float' onChange={(e) => {
        console.log('float: ', e.target.value)
      }} />
    </>
  );
}

export default FieldDemo;