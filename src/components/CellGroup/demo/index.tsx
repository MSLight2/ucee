import React from 'react';
import { Cell, CellGroup } from 'ucee-mobile'

const CellGroupDemo = ():JSX.Element => {
  return (
    <>
      <CellGroup>
        <Cell title="单元格" />
        <Cell title="单元格" value='内容' />
      </CellGroup>
      <CellGroup style={{marginTop: 10}}>
        <Cell title="单元格" />
        <Cell title="单元格" value='内容' />
      </CellGroup>
    </>
  );
}

export default CellGroupDemo;