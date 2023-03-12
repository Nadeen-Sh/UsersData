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
}));
