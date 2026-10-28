import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // أو حسب مكان تعريف الـ Context
import type { ThemeContextType } from '../context/ThemeTypes';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};