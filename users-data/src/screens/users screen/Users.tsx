import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Typography,
} from '@mui/material';
import UsersStyle from './Users.style';
import userLogo from '../../assets/user.png';
import UsersTable from './UsersTable';

const UsersComponent: React.FC<any> = () => {
	const classes = UsersStyle();
	return (
		<div className={classes.page}>
			<div className={classes.header}>
				<Typography className={classes.title}>Users</Typography>
				<div className={classes.userContainer}>
					<Typography className={classes.userName}>Jones Ferdinand</Typography>
					<img src={userLogo} alt='user' className={classes.userImg} />
				</div>
			</div>
			<Paper className={classes.tablePaper}>
				<Typography className={classes.title}>All Users</Typography>
				<UsersTable />
			</Paper>
		</div>
	);
};
export default UsersComponent;
