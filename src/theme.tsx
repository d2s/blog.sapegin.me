const baseFont = 'Georgia, serif';
const monospaceFont = 'Monaco, "DejaVu Sans Mono", "Lucida Console", monospace';
const space = {
	xxs: '0.125rem', // 2px
	xs: '0.25rem', // 4px
	s: '0.5rem', // 8px
	m: '1rem', // 16px
	l: '2rem', // 32px
	xl: '4rem', // 64px
	xxl: '8rem', // 128px
	xxxl: '16rem', // 256px
	'-xxs': '-0.125rem', // 2px
	'-xs': '-0.25rem', // 4px
	'-s': '-0.5rem', // 8px
	'-m': '-1rem', // 16px
	'-l': '-2rem', // 32px
	'-xl': '-4rem', // 64px
	'-xxl': '-8rem', // 128px
	'-xxxl': '-16rem', // 256px
};
const breakpoints = [
	'38rem', // 608px
	'48rem', // 768px
	'62rem', // 992px
	'75rem', // 1200px
];
const fonts = {
	base: baseFont,
	heading: baseFont,
	pre: monospaceFont,
	code: 'inherit',
};
const fontSizes = {
	base: '1rem',
	xxl: '2.2rem',
	xl: '1.7rem',
	l: '1.25rem',
	mplus: '1.1rem', // TODO
	m: '1rem',
	s: '0.85rem',
	xs: '0.7rem',
};
const colors = {
	bg: '#f9f8f6',
	base: '#331f06',
	primary: '#331f06',
	hover: '#b15400',
	accent: '#8c5410',
	selection: 'rgb(255,237,117)',
	selectionAlpha: 'rgba(255,237,117,0.25)',
};
const fontWeights = {
	base: 300,
	heading: 300,
};
const lineHeights = {
	base: 1.5,
	heading: 1.1,
	small: 1.4,
};
const letterSpacings = {
	base: 0,
	heading: 0,
};
const headingBaseStyles = {
	color: 'base',
	fontFamily: 'heading',
	fontWeight: 'heading',
	lineHeight: 'heading',
	letterSpacing: 'heading',
};
const textBaseStyles = {
	color: 'base',
	fontFamily: 'base',
	fontWeight: 'base',
	lineHeight: 'base',
	letterSpacing: 'base',
};

const theme = {
	baseFontSize: '1.125em',
	blockMarginBottom: space.m,
	headingMarginTop: space.l,
	listMargin: '1.3em',
	page: {
		maxWidth: null,
		xPadding: space.m,
		yPadding: space.m,
		contentMaxWidth: '44rem',
		textMaxWidth: '44rem',
	},
	fonts,
	space,
	fontSizes,
	fontWeights,
	lineHeights,
	letterSpacings,
	colors,
	breakpoints,
	headingStyles: {
		1: {
			...headingBaseStyles,
			fontSize: 'xxl',
		},
		2: {
			...headingBaseStyles,
			fontSize: 'xl',
		},
		3: {
			...headingBaseStyles,
			fontSize: 'l',
		},
	},
	textStyles: {
		base: {
			...textBaseStyles,
		},
		small: {
			...textBaseStyles,
			fontSize: 's',
		},
		xsmall: {
			...textBaseStyles,
			fontSize: 'xs',
		},
		italic: {
			...textBaseStyles,
			fontStyle: 'italic',
		},
	},
} as const;

export default theme;

export const inverted = {
	...theme,
	colors: {
		...theme.colors,
		bg: colors.accent,
		base: colors.bg,
		primary: colors.bg,
		hover: '#fff',
		accent: '#fff',
	},
} as const;
