type XSMALL = 'xsmall';
type SMALL = 'small';
type MEDIUM = 'medium';
type LARGE = 'large';
type XLARGE = 'xlarge';
type NONE = 'none';

export const sizes = {
	none: 'none',
	xsmall: 'xsmall',
	small: 'small',
	medium: 'medium',
	large: 'large',
	xlarge: 'xlarge',
} as const;

export type SizesType = XSMALL | SMALL | MEDIUM | LARGE | XLARGE | NONE;
