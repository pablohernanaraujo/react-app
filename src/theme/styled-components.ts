import * as styledComponents from 'styled-components';

import { PaletteType } from './palette';
import { EmphasisType } from './emphasis';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{
  Palette: PaletteType;
  Emphasis: EmphasisType;
}>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
