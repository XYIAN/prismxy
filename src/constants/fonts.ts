import { FontOption } from '@/types';

export const FONT_OPTIONS: FontOption[] = [
  {
    id: 'inter',
    name: 'Inter',
    family: 'Inter, sans-serif',
    category: 'sans-serif',
    googleFont: 'Inter:wght@300;400;500;600;700;800;900',
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: 'Poppins, sans-serif',
    category: 'sans-serif',
    googleFont: 'Poppins:wght@300;400;500;600;700;800;900',
  },
  {
    id: 'playfair',
    name: 'Playfair Display',
    family: 'Playfair Display, serif',
    category: 'serif',
    googleFont: 'Playfair+Display:wght@400;500;600;700;800;900',
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    family: 'Montserrat, sans-serif',
    category: 'sans-serif',
    googleFont: 'Montserrat:wght@300;400;500;600;700;800;900',
  },
  {
    id: 'roboto',
    name: 'Roboto',
    family: 'Roboto, sans-serif',
    category: 'sans-serif',
    googleFont: 'Roboto:wght@300;400;500;700;900',
  },
];

export const DEFAULT_FONT = FONT_OPTIONS[0];

export const getGoogleFontsUrl = (fonts: FontOption[]): string => {
  const fontFamilies = fonts
    .filter(font => font.googleFont)
    .map(font => font.googleFont)
    .join('&family=');

  return `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`;
};
