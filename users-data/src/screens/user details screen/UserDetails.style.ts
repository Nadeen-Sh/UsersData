import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
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
	name: { textAlign: 'center' },
}));
