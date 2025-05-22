// src/context/ColorContext.tsx
import React, { createContext, useState } from 'react';

interface ColorContextValue {
  checkboxColor: string;
  strikeColor:   string;
  setCheckboxColor: (c: string) => void;
  setStrikeColor:   (c: string) => void;
}

export const ColorContext = createContext<ColorContextValue>({
  checkboxColor: '#FF6B6B',
  strikeColor:   '#999999',
  setCheckboxColor: () => {},
  setStrikeColor:   () => {},
});

export const ColorProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [checkboxColor, setCheckboxColor] = useState('#FF6B6B');
  const [strikeColor,   setStrikeColor]   = useState('#999999');

  return (
    <ColorContext.Provider value={{ checkboxColor, strikeColor, setCheckboxColor, setStrikeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
