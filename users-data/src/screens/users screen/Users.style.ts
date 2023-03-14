import { makeStyles } from '@mui/styles';

export default makeStyles((appTheme: any) => ({
	text: {
		fontFamily: appTheme.typography.fontFamily,
		fontStyle: 'normal ! important',
	},

	title: {
		fontWeight: appTheme.typography.fontWeightMedium,
		fontSize: '24px ! important',
		lineHeight: '30px !important',
		letterSpacing: ' 0.3px ! important',
		color: appTheme.palette.primary.dark,
	},
	userName: {
		fontWeight: appTheme.typography.fontWeightLight,
		fontSize: '14px ! important',
		lineHeight: '45px !important',
		letterSpacing: '0.2px ! important',
		color: appTheme.palette.primary.dark,
		alignContent: 'center',
		paddingRight: '3px',
	},
	userImg: {
		width: '44px !important',
		height: '44px !important',
		borderRadius: '50% !important',
	},
	imgContainer: {
		border: '2px solid #DFE0EB !important',
		borderRadius: '50% !important',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: '30px',
	},
	userContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: '15px',
	},
	tablePaper: { marginTop: '22px !important', marginRight: '15px' },
	page: {
		marginLeft: '280px',
		backgroundColor: appTheme.palette.primary.light,
	},
	allUserContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '20px',
	},
	genderFilter: {
		paddingRight: '8px',
	},
	headTable: {
		color: appTheme.palette.secondary.light,
		fontSize: '14px !important',
		letterSpacing: '0.2px',
		lineHeight: '18px',
		fontWeight: appTheme.typography.fontWeightMedium,
	},
	tableText: {
		color: appTheme.palette.secondary.main,
		fontSize: '12px !important',
		fontWeight: '400',
		lineHeight: ' 16px',
		letterSpacing: '0.1px',
	},

	userFullName: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: '30px',
	},
	firstCell: { display: 'flex', flexDirection: 'row' },
	cellText: {
		fontWeight: appTheme.typography.fontWeightLight,
		fontSize: '14px !important',
		lineHeight: '20px',
		letterSpacing: '0.2px',
		color: appTheme.palette.primary.dark,
	},
	startCell: {
		paddingLeft: '30px !important',
	},
	footerTable: {
		color: appTheme.palette.secondary.light,
	},
	userRow: {
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: '#e5e5ff',
		},
	},
	clickedRow: { backgroundColor: '#e5e5ff' },
}));
