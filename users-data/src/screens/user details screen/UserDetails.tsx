import React, { useEffect, useState } from 'react';
import { Dialog, Typography } from '@mui/material';
import UserDetailsStyle from './UserDetails.style';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetails: React.FC<any> = (props) => {
	const { onClose, data } = props;
	const classes = UserDetailsStyle();

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
						src={data.picture.large}
						alt='user'
					/>
				</div>
				<div className={classes.details}>
					<Typography className={classes.name}>
						{data.name.first} {data.name.last}
					</Typography>
					<Typography className={classes.name}>{data.email} </Typography>
				</div>
			</Dialog>
		</div>
	);
};

export default UserDetails;
