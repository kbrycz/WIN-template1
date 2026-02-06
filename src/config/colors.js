/**
 * Color Configuration
 * 
 * Centralized color palette for the application.
 * Modify these colors to customize the theme.
 * Colors are automatically integrated into Tailwind CSS.
 */

export const colors = {
  // Primary colors - main brand colors (#8e44ad)
  // Full scale properly derived from #8e44ad
  primary: {
    50: '#f5eef8',
    100: '#ead8f1',
    200: '#d9b5e3',
    300: '#c488d1',
    400: '#b063bf',
    500: '#9d4fad',
    600: '#8e44ad', // Your specified primary color
    700: '#7a3a95',
    800: '#66317d',
    900: '#522865',
    950: '#3d1d4a',
  },
  
  // Secondary colors - lighter purple variations that complement #8e44ad
  secondary: {
    50: '#f8f4fb',
    100: '#f0e8f6',
    200: '#e0d1ed',
    300: '#c9a8dd',
    400: '#b39ddb',
    500: '#9a60b4',
    600: '#8b4fa0',
    700: '#7a3a8c',
    800: '#682f78',
    900: '#562664',
    950: '#441d50',
  },
  
  // Accent colors - purple-pink variations that harmonize with #8e44ad
  accent: {
    50: '#faf0f8',
    100: '#f5e0f1',
    200: '#ecc0e3',
    300: '#e095d1',
    400: '#d46abf',
    500: '#c84fad',
    600: '#b8449d',
    700: '#9d3a85',
    800: '#822f6d',
    900: '#672555',
    950: '#4c1d3d',
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Semantic colors - purple variations instead of green/yellow/red
  // Success: lighter, softer purple tones
  success: {
    50: '#f5eef8',
    100: '#ead8f1',
    200: '#d9b5e3',
    300: '#c488d1',
    400: '#b063bf',
    500: '#9d4fad',
    600: '#8e44ad',
    700: '#7a3a95',
    800: '#66317d',
    900: '#522865',
    950: '#3d1d4a',
  },
  
  // Warning: warmer purple tones with slight pink tint
  warning: {
    50: '#faf0f8',
    100: '#f5e0f1',
    200: '#ecc0e3',
    300: '#e095d1',
    400: '#d46abf',
    500: '#c84fad',
    600: '#b8449d',
    700: '#9d3a85',
    800: '#822f6d',
    900: '#672555',
    950: '#4c1d3d',
  },
  
  // Error: darker, deeper purple tones
  error: {
    50: '#f0e8f6',
    100: '#e0d1ed',
    200: '#c9a8dd',
    300: '#a87bc7',
    400: '#8b4fa0',
    500: '#7a3a8c',
    600: '#682f78',
    700: '#562664',
    800: '#441d50',
    900: '#33143c',
    950: '#220b28',
  },
  
  // Base colors
  white: '#ffffff',
  black: '#000000',
}
