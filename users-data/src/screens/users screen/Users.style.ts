import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	title: {
		fontFamily: 'Mulish ! important',
		fontStyle: 'normal ! important',
		fontWeight: '700 ! important',
		fontSize: '24px ! important',
		lineHeight: '30px !important',
		letterSpacing: ' 0.3px ! important',
		color: '#252733 ! important',
	},
	userName: {
		fontFamily: 'Mulish ! important',
		fontStyle: 'normal ! important',
		fontWeight: '600 ! important',
		fontSize: '14px ! important',
		lineHeight: '45px !important',
		letterSpacing: '0.2px ! important',
		color: '#252733 !important',
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
	page: { marginLeft: '280px', backgroundColor: '#e5e5e5' },
	allUserContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '20px',
	},
	genderFilter: {
		paddingRight: '8px',
	},
	headTable: { color: '#9FA2B4 !important', fontSize: '14px !important' },
	tableText: { color: '#C5C7CD !important', fontSize: '12px !important' },
	pText: { color: '#252733 !important', fontSize: '14px !important' },
}));
