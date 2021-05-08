import React, {useReducer} from 'react';
import {ContextState, reducer, initState} from './State';

const ContextProvider: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <ContextState.Provider value={{state, dispatch}}>{props.children}</ContextState.Provider>;
};

export default ContextProvider;