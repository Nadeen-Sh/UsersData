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
	},
	userImg: {
		width: '44px !important',
		height: '44px !important',
		borderRadius: '50% !important',
		border: '1.5px solid #DFE0EB !important',
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
	},
	tablePaper: { marginTop: '22px !important' },
	page: { marginLeft: '280px', backgroundColor: ' #e5e5e5' },
}));
