// src/context/ThemeContext.tsx
import { createContext, useState, ReactNode, useContext } from 'react';

// Definimos los tipos para nuestro contexto
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Creamos el contexto con un valor inicial undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Creamos el "Proveedor" del contexto. Este componente envolverá nuestra aplicación.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light'); // Estado inicial: claro

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Aplicamos la clase al body cada vez que el tema cambie
  document.body.className = theme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Creamos un "hook" personalizado para usar el contexto más fácilmente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};