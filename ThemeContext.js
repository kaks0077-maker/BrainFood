import { createContext, useContext } from 'react';

export const ThemeContext = createContext();
export function useTheme() { return useContext(ThemeContext); }

export const DARK = {
  mode: 'dark', bg: '#0d1117',
  card: 'rgba(255,255,255,0.04)', cardBorder: 'rgba(255,255,255,0.08)',
  text: '#ffffff', textSub: 'rgba(255,255,255,0.5)', textMuted: 'rgba(255,255,255,0.28)',
  accent: '#ffd93d', tabBg: '#0d1117', tabBorder: 'rgba(255,255,255,0.08)',
  input: 'rgba(255,255,255,0.05)', inputBorder: 'rgba(255,255,255,0.08)',
};

export const LIGHT = {
  mode: 'light', bg: '#f5f5f5',
  card: '#ffffff', cardBorder: 'rgba(0,0,0,0.08)',
  text: '#111111', textSub: 'rgba(0,0,0,0.5)', textMuted: 'rgba(0,0,0,0.35)',
  accent: '#e6a800', tabBg: '#ffffff', tabBorder: 'rgba(0,0,0,0.1)',
  input: 'rgba(0,0,0,0.05)', inputBorder: 'rgba(0,0,0,0.12)',
};
