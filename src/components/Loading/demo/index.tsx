import React from 'react';
import CircleRing from '../components/CircleRing';
import CircleRolling from '../components/CircleRolling';
import DanceBar from '../components/DanceBar';
import Spinner from '../components/Spinner';
import Loading from '../index'

const LoadingDemo = ():JSX.Element => {
  return (
    <>
      <Spinner color="#f90" />
      <CircleRolling color="red" />
      <CircleRing color="blue" />
      <DanceBar color="green" />
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