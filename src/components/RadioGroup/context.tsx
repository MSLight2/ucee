import React from 'react';

export interface RadioGroupContextProps {
  onChange?: (e: any) => void
  value?: any
  name?: string
  disabled?: boolean
}

const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null);

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;