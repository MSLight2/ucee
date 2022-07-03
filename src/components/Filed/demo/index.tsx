import React from 'react';
import Button from '../../Button';
import Icon from '../../Icon';
import Field from '../index';

const FieldDemo = ():JSX.Element => {
  return (
    <>
      <Field label="文本" placeholder="请输入文本" />
      <Field label="文本" placeholder="请输入文本" readonly value="只读文本" />
      <Field label="文本" placeholder="请输入文本" disabled />
      <Field label="文本" placeholder="请输入文本" inputAlign='right' />

      <div>type</div>
      <Field type='password' label="密码" placeholder="请输入密码" border />
      <Field type='number' label="数字" placeholder="请输入数字" />
      <Field type='tel' label="手机号" placeholder="请输入手机号" />
      <Field formatType='float' label="小数" placeholder="请输入小数" />
      <Field formatType='integer' label="整数" placeholder="请输入整数" />

      <div>icon</div>
      <Field label='图标' placeholder="请输入文本" leftIcon={<Icon name='mine' />} />
      <Field label='图标' placeholder="请输入文本" clearable />
      <Field label='图标' placeholder="请输入文本" rightIcon={<Icon name='search' />} />
      <Field label='图标' placeholder="请输入文本" rightIcon={<Button type='primary' size='small'>发送验证码</Button>} />

      <div>type</div>
      <Field label="onChange" placeholder="请输入文本" onChange={(e) => {
        console.log('onChange: ', e.target.value)
      }} />
      <Field label="integer" placeholder="请输入数字" formatType='integer' onChange={(e) => {
        console.log('integer: ', e.target.value)
      }} />
      <Field label="float" placeholder="请输入浮点数" formatType='float' onChange={(e) => {
        console.log('float: ', e.target.value)
      }} />
    </>
  );
}

export default FieldDemo;