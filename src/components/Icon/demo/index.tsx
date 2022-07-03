import React from 'react';
import Icon from '../index';
import logo from '../../../assets/logo.png';

const IconDemo = ():JSX.Element => {
  return (
    <>
      <Icon name="taxi" />
      <Icon name="deliver" />
      <Icon name="deliver" size={26} />
      <Icon name="deliver" size='2vw' />
      <Icon name="deliver" color="#f90" size={30} />
      <Icon name="deliver" className="icon-u" classPrefix="my-icon" />
      <Icon name="notice" dot size={30}/>
      <Icon name="notice" info='999' size={30}/>
      <Icon name="notice" info='25' size={30} onClick={() => console.log('icon click')} />
      <Icon name={logo} />
      <Icon name="https://img.yzcdn.cn/vant/user-active.png"/>
    </>
  );
}

export default IconDemo;