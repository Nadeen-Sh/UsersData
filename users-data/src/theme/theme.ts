import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
	palette: {
		primary: {
			light: '#e5e5e5 !important',
			main: '#363740 !important',
			dark: '#252733 !important',
		},
		secondary: {
			light: '#9FA2B4 !important',
			main: '#C5C7CD !important',
			dark: '#A4A6B3 !important',
		},
	},
	typography: {
		fontFamily: 'Mulish',
		fontWeightMedium: '700 !important',
		fontWeightLight: '600 !important',
	},
});
