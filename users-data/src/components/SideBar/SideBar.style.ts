import { makeStyles } from '@mui/styles';

export default makeStyles((appTheme: any) => ({
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '30px',
		marginTop: '30px',
	},
	icon: {
		height: '32px',
		width: '131px',
	},
	listOption: {
		color: appTheme.palette.secondary.dark,
	},
	listOptionText: {
		fontFamily: appTheme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: '400 !important',
		fontSize: '16px !important',
		lineHeight: '20px !important',
		letterSpacing: '0.2px !important',
		color: appTheme.palette.secondary.dark,
	},
}));
