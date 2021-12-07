import React from 'react';
export interface IProviderProps {
    children?: any;
  }
  
  const initialState = {
    state: Object,
    setState: () => {},
  };

export const temperature = React.createContext(initialState);

