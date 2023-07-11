'use client';

import { generateRandomPlate } from '../helpers';
import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext({
  plate: {},
  generatePlate: () => {},
  cleanPlate: () => {},
});

const GlobalContextProvider = ({ children }) => {
  const [plate, setPlate] = useState({});

  const generatePlate = () => {
    const generatedPlate = generateRandomPlate();

    setPlate(generatedPlate);
    return generatedPlate;
  };
  const cleanPlate = () => {
    setPlate({});
  };

  return (
    <GlobalContext.Provider value={{ plate, generatePlate, cleanPlate }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext, GlobalContextProvider };
