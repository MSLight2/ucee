import React from 'react';
import Checkbox from '../../Checkbox';
import CheckboxGroup from '../index';

const CheckboxGroupDemo: React.FC = () => {
  const options = [
    {label: 'option1', value: 'A'},
    {label: 'option2', value: 'B'},
    {label: 'option3', value: 'C'},
  ]
  const options2 = ['B', 'E', 'F'];

  return (
    <>
      <div>option配置</div>
      <CheckboxGroup name="radioGroup1" options={options} />
      <CheckboxGroup name="radioGroup" disabled options={options2} />
      <CheckboxGroup name="radioGroup3" value={['E', 'F']} options={options2} />
      <div>水平展示</div>
      <CheckboxGroup name="radioGroup-horizontal" direction="horizontal" options={options} />
      <div>组合Radio</div>
      <CheckboxGroup>
        <Checkbox value={1}>默认</Checkbox>
        <Checkbox value={2}>默认</Checkbox>
        <Checkbox value={3}>默认</Checkbox>
      </CheckboxGroup>
      <div>disabled</div>
      <CheckboxGroup disabled value={[1, 2]}>
        <Checkbox value={1}>禁用</Checkbox>
        <Checkbox value={2}>禁用</Checkbox>
        <Checkbox value={3}>禁用</Checkbox>
      </CheckboxGroup>
      <div>onChange</div>
      <CheckboxGroup value={['change2', 'change3']} onChange={(val: any) => {
        console.log(val);
      }}>
        <Checkbox value="change1">change1</Checkbox>
        <Checkbox value="change2">change2</Checkbox>
        <Checkbox value="change3">change3</Checkbox>
      </CheckboxGroup>
    </>
  );
}

export default CheckboxGroupDemo;