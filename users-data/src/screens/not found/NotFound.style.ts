import { makeStyles } from '@mui/styles';

export default makeStyles((appTheme: any) => ({
	page: {
		marginLeft: '280px',
	},
	secText: {
		display: 'flex',
		flexDirection: 'row',
	},
	notFoundContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '60px',
	},
	text: {
		fontFamily: appTheme.typography.fontFamily,
		fontStyle: 'normal ! important',
		fontWeight: appTheme.typography.fontWeightMedium,
		fontSize: '24px ! important',
		lineHeight: '30px !important',
		letterSpacing: ' 0.3px ! important',
		color: appTheme.palette.primary.main,
		paddingTop: '15px',
	},
	linkText: {
		paddingLeft: '5px',
		color: 'blue !important',
		'&:hover': {
			color: appTheme.palette.secondary.light,
		},
	},
}));
