import * as styledComponents from 'styled-components';

import { PaletteType } from './palette';
import { EmphasisType } from './emphasis';

const {
  default: styled,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<{
  Palette: PaletteType;
  Emphasis: EmphasisType;
}>;

export { createGlobalStyle, ThemeProvider };
export default styled;
