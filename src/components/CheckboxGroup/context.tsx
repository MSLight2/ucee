import React from 'react';
import { CheckboxValueType } from '.';

export interface RadioGroupContextProps {
  onChange?: (e: any) => void
  value?: CheckboxValueType[]
  name?: string
  disabled?: boolean
}

const CheckboxGroupContext = React.createContext<RadioGroupContextProps | null>(null);

export const CheckboxGroupContextProvider = CheckboxGroupContext.Provider;

export default CheckboxGroupContext;