import { PaletteType, KeyPalette, Weight } from './palette';
import { EmphasisType, KeyEmphasis } from './emphasis';

export interface Theme {
  /** Colors */
  color?: KeyPalette;
  /** Colors weight */
  colorWeight?: Weight;
  /** Emphasis is the opacity for color */
  emphasis?: KeyEmphasis;
  /** Theme brand */
  theme: {
    Palette: PaletteType;
    Emphasis: EmphasisType;
  };
}

export type ThemedStyled = Pick<Theme, 'theme'>;
