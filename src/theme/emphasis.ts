export type EmphasisType = {
  [key in KeyEmphasis]: number;
};

export type KeyEmphasis = 'high' | 'medium' | 'low' | 'pure';

export const Emphasis: EmphasisType = {
  high: 0.87,
  medium: 0.6,
  low: 0.38,
  pure: 1,
};
