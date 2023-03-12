import React from 'react';
import { Dialog, Typography } from '@mui/material';
import UserDetailsStyle from './UserDetails.style';

const UserDetails: React.FC<any> = (props) => {
	const { onClose, data } = props;
	const classes = UserDetailsStyle();
	console.log('data', data);

	return (
		<div>
			<Dialog
				open={true}
				onClose={onClose}
				PaperProps={{
					sx: { position: 'absolute', m: 0 },
					classes: { root: classes.userDetailsStyle },
				}}>
				<div className={classes.profile}></div>
				<div className={classes.imageContainer}>
					<img
						className={classes.userImage}
						src={data[0].picture.large}
						alt='user'
					/>
				</div>
				<div className={classes.details}>
					<Typography className={classes.name}>
						{data[0].name.first} {data[0].name.last}
					</Typography>
					<Typography className={classes.name}>{data[0].email} </Typography>
				</div>
			</Dialog>
		</div>
	);
};

export default UserDetails;
