import React from 'react';
import Radio from '../../Radio';
import RadioGroup from '../index';

const RadioGroupDemo = ():JSX.Element => {
  const options = [
    {label: 'option1', value: 1},
    {label: 'option2', value: 2},
    {label: 'option3', value: 3},
  ]

  return (
    <>
      <div>option配置</div>
      <RadioGroup name="radioGroup1" options={options} />
      <RadioGroup name="radioGroup" disabled options={options} />
      <RadioGroup name="radioGroup3" value={2} options={options} />
      <div>水平展示</div>
      <RadioGroup name="radioGroup-horizontal" direction="horizontal" options={options} />
      <div>组合Radio</div>
      <RadioGroup>
        <Radio value={1}>默认</Radio>
        <Radio value={2}>默认</Radio>
        <Radio value={3}>默认</Radio>
      </RadioGroup>
      <div>disabled</div>
      <RadioGroup disabled value={2}>
        <Radio value={1}>禁用</Radio>
        <Radio value={2}>禁用</Radio>
        <Radio value={3}>禁用</Radio>
      </RadioGroup>
      <div>onChange</div>
      <RadioGroup value='change2' onChange={(e: any) => {
        console.log(e.target.value);
      }}>
        <Radio value="change1">change1</Radio>
        <Radio value="change2">change2</Radio>
        <Radio value="change3">change3</Radio>
      </RadioGroup>
    </>
  );
}

export default RadioGroupDemo;