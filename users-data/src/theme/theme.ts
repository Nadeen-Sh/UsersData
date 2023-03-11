import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
	palette: {
		primary: blue,
		secondary: {
			light: '#ECF3F3',
			main: '#6da0a0',
			dark: blue[700],
		},
	},
});
