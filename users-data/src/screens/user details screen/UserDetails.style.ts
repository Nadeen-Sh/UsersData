import { makeStyles } from '@mui/styles';

export default makeStyles((appTheme: any) => ({
	userDetailsStyle: {
		width: '545px',
		right: 0,
		height: '100%',
		minHeight: '600px',
	},
	imageContainer: {
		position: 'absolute',
		top: '75px',
		left: '39%',
	},
	profile: {
		backgroundColor: '#2050AD !important',
		width: '546px',
		height: '158px',
	},
	userImage: {
		borderRadius: '50%',
	},
	details: {
		marginTop: '55px',
	},
	text: { textAlign: 'center', fontFamily: appTheme.typography.fontFamily },

	name: {
		fontSize: '18px',
		lineHeight: '20px !important',
		letterSpacing: '0.2px',
		color: appTheme.palette.primary.dark,
		fontWeight: appTheme.typography.fontWeightMedium,
	},
	address: {
		fontWeight: '400',
		fontSize: '14px',
		lineHeight: '16px',
		letterSpacing: '0.1px',
		color: '#87888C',
	},
}));
