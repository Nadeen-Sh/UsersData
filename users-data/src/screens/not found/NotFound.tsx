import React from 'react';
import { Typography } from '@mui/material';
import NotFoundStyle from './NotFound.style';
import { clsx } from 'clsx';

import notFound from '../../assets/notFound.jpg';
import { Link } from 'react-router-dom';

const NotFoundComponent: React.FC<any> = () => {
	const classes = NotFoundStyle();
	return (
		<div className={classes.page}>
			<div className={classes.notFoundContainer}>
				<img src={notFound} alt='error' />

				<Typography className={classes.text}>PAGE NOT FOUND</Typography>
				<div className={classes.secText}>
					<Typography className={classes.text}>Go to </Typography>
					<Link to={'/users/'}>
						{' '}
						<Typography className={clsx(classes.text, classes.linkText)}>
							Users
						</Typography>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFoundComponent;
