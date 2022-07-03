import React from 'react';
import './styles/index.scss';

import IconDemo from './components/Icon/demo'
import LoadingDemo from './components/Loading/demo'
import ButtonDemo from './components/Button/demo'
import TagDemo from './components/Tag/demo'
import CellDemo from './components/Cell/demo'
import CellGroupDemo from './components/CellGroup/demo'
import FiledDemo from './components/Filed/demo'
import SearchDemo from './components/Search/demo'
import RadioDemo from './components/Radio/demo'
import RadioGroupDemo from './components/RadioGroup/demo'
import Checkbox from './components/Checkbox/demo'
import CheckboxGroup from './components/CheckboxGroup/demo'
import ToastDemo from './components/Toast/demo'
import RateDemo from './components/Rate/demo'

const styles = {
  divStyle: {
    margin: '10px 0',
    padding: '10px'
  }
}
function App() {
  const show = false;
  return (
    <div className="App">
      {show &&
        <>
          <h2>Icon</h2>
          <div style={styles.divStyle}>
            <IconDemo />
          </div>
    
          <h2>laoding</h2>
          <div style={styles.divStyle}>
            <LoadingDemo />
          </div>
    
          <h2>button</h2>
          <div style={styles.divStyle}>
            <ButtonDemo />
          </div>
    
          <h2>tag</h2>
          <div style={styles.divStyle}>
            <TagDemo />
          </div>
    
          <h2>cell</h2>
          <div style={styles.divStyle}>
            <CellDemo />
            <div>cell group</div>
            <CellGroupDemo />
          </div>
    
          <h2>field</h2>
          <div style={styles.divStyle}>
            <FiledDemo />
          </div>
    
          <h2>search</h2>
          <div style={styles.divStyle}>
            <SearchDemo />
          </div>
          <h2>radio</h2>
          <div style={styles.divStyle}>
            <RadioDemo />
            <h3 style={{marginTop: 20}}>radio group</h3>
            <RadioGroupDemo />
          </div>
          <h2>checkbox</h2>
          <div style={styles.divStyle}>
            <Checkbox />
            <h3 style={{marginTop: 20}}>checkbox group</h3>
            <CheckboxGroup />
          </div>
          <h2>rate</h2>
          <div style={styles.divStyle}>
            <RateDemo />
          </div>
        </>
      }
      <h2>toast</h2>
      <div style={styles.divStyle}>
        <ToastDemo />
      </div>
    </div>
  );
}

export default App;
