import React from 'react';
import { Loading, LoadingIcon } from 'ucee-mobile';

const LoadingDemo = ():JSX.Element => {
  return (
    <>
      <LoadingIcon.Spinner color="#f90" />
      <LoadingIcon.CircleRolling color="red" />
      <LoadingIcon.CircleRing color="blue" />
      <LoadingIcon.DanceBar color="green" />
      <div></div>
      <Loading />
      <Loading hiddenText />
      <Loading type='rolling' />
      <Loading type='bar' />
      <Loading type='ring' />
      <Loading color="#f90" />
      <Loading size={40} />
      <Loading text="loading..."/>
      <Loading vertical />
      <Loading className='svg-classname' />
    </>
  );
}

export default LoadingDemo;