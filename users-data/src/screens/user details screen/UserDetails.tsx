import React, { useEffect, useState } from 'react';
import { Dialog, Typography } from '@mui/material';
import UserDetailsStyle from './UserDetails.style';
import clsx from 'clsx';

const UserDetails: React.FC<any> = (props) => {
	const { onClose, data } = props;
	const classes = UserDetailsStyle();

	let error = false;
	if (Object.keys(data).length == 0) {
		error = true;
	} else {
		error = false;
	}

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
				{!error ? (
					<>
						<div className={classes.imageContainer}>
							<img
								className={classes.userImage}
								src={data.picture.large}
								alt='user'
							/>
						</div>
						<div className={classes.details}>
							<Typography className={clsx(classes.text, classes.name)}>
								{data.name.first} {data.name.last}
							</Typography>
							<Typography className={clsx(classes.text, classes.address)}>
								{data.location.street.number} {data.location.street.name},{' '}
								{data.location.city}, {data.location.country}{' '}
								{data.location.postcode}{' '}
							</Typography>
						</div>
					</>
				) : (
					<Typography className={classes.text}>
						Wait until find the user
					</Typography>
				)}
			</Dialog>
		</div>
	);
};

export default UserDetails;
