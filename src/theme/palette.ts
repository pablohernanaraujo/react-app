export type Weight =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800';

export const Palette = {
  pink: {
    '400': '#ffd3cf',
    '500': '#FF3366',
  },
  greyBlue: {
    '500': '#283238',
  },
  blue: {
    '400': '#0080FF',
    '500': '#046DED',
  },
  green: {
    '400': '#d3e7ea',
    '500': '#00A48C',
  },
  red: {
    '500': '#C60D2B',
  },
  grey: {
    '50': '#FAFAFA',
    '200': '#F5F9FC',
    '300': '#EFF3F5',
    '400': '#DEE3EC',
    '500': '#CCD2DE',
    '600': '#576379',
    '700': '#2D384A',
    '800': '#162236',
  },
  white: '#ffffff',
};

export type PaletteType = typeof Palette;
export type KeyPalette = keyof PaletteType;
