import React, { createContext, useReducer } from 'react';
import textReducer from './TextReducer';

const Context = createContext();

const TextProvider = ({ children }) => {
    const initialState = {
        texts: [],
    };

    const [state, dispatch] = useReducer(textReducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export { Context, TextProvider };
