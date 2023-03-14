import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	Typography,
} from '@mui/material';
import UsersStyle from './Users.style';
import UserDetails from '../user details screen/UserDetails';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

const UsersTable: React.FC<any> = (props: any) => {
	const ur = browserHistory.location.pathname.split('s/');

	const classes = UsersStyle();
	const { rows, rowsPerPage, handleChangePage, handleChangeRowsPerPage, page } =
		props;
	const [open, setOpen] = useState(false);
	const [newData, setNewData] = useState<any>([]);
	const navigate = useNavigate();

	const handleClickOpen = (data: any, id: any) => {
		setOpen(data);
		navigate(`/users/${id}`);
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const filteredData = rows.filter((row: any) => {
			return row.id.name == ur[1];
		});
		let finalObj = {};

		for (let i = 0; i < filteredData.length; i++) {
			Object.assign(finalObj, filteredData[i]);
		}
		setNewData(finalObj);

		if (browserHistory.location.pathname.length > 7) {
			handleClickOpen(newData, ur[1]);
		}
	}, [browserHistory, rows]);

	return (
		<>
			<TableContainer>
				<Table sx={{ float: 'left' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell
								align='left'
								className={clsx(classes.text, classes.headTable)}>
								User
							</TableCell>
							<TableCell
								className={clsx(classes.text, classes.headTable)}
								align='left'>
								Contact Information
							</TableCell>
							<TableCell
								className={clsx(classes.text, classes.headTable)}
								align='left'>
								Registration Date
							</TableCell>
							<TableCell
								className={clsx(classes.text, classes.headTable)}
								align='left'>
								Country/Post Code
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row: any, index: number) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell
									component='th'
									scope='row'
									onClick={() => handleClickOpen(row, row.id.name)}>
									<div className={classes.firstCell}>
										<img className={classes.userImg} src={row.picture.large} />
										<div className={classes.userFullName}>
											<Typography className={classes.cellText}>
												{row.name.first} {row.name.last}
											</Typography>
											<Typography className={classes.tableText}>
												{row.location.street.number} {row.location.street.name},{' '}
												{row.location.city}
											</Typography>
										</div>
									</div>
								</TableCell>
								<TableCell align='left'>
									<div>
										<Typography className={classes.cellText}>
											{row.email}
										</Typography>
										<Typography className={classes.tableText}>
											{row.cell}
										</Typography>
									</div>
								</TableCell>
								<TableCell align='left' className={classes.cellText}>
									{row.registered.date}
								</TableCell>
								<TableCell align='left'>
									<Typography className={classes.cellText}>
										{row.location.country}
									</Typography>
									<Typography className={classes.tableText}>
										{row.location.postcode}
									</Typography>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[8, 16]}
				component='div'
				count={16}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>

			{open && (
				<UserDetails open={handleClickOpen} onClose={handleClose} data={open} />
			)}
		</>
	);
};
export default UsersTable;
