import React, { useReducer } from 'react';
import { ContextState, reducer, initState } from './State';

const ContextProvider: React.FC = (props) => {
  console.log(1111);
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ContextState.Provider value={{ state, dispatch }}>{props.children}</ContextState.Provider>
  );
};

export default ContextProvider;
