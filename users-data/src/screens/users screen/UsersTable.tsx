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
import axios from 'axios';
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory();

const UsersTable: React.FC<any> = (props: any) => {
	const pathNameUrl = browserHistory.location.pathname.split('s/');

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
		navigate(`/users/`);
	};

	useEffect(() => {
		axios
			.get(`https://randomuser.me/api?seed=${pathNameUrl[1]}`)
			.then(({ data }) => {
				let finalObj = {};

				for (let i = 0; i < data.results.length; i++) {
					Object.assign(finalObj, data.results[i]);
				}
				setNewData(finalObj);
			})
			.catch((err: any) => console.log(err));

		if (browserHistory.location.pathname.length > 7) {
			handleClickOpen(newData, pathNameUrl[1]);
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
								className={clsx(
									classes.text,
									classes.headTable,
									classes.startCell
								)}>
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
						{rows.map((row: any, index: number) => {
							var hours = parseInt(row.registered.date.substring(0, 2), 10),
								minutes = row.registered.date.substring(2, 4),
								ampm = 'AM';

							if (hours == 12) {
								ampm = 'PM';
							} else if (hours == 0) {
								hours = 12;
							} else if (hours > 12) {
								hours -= 12;
								ampm = 'PM';
							}

							var date = new Date(row.registered.date);
							var year = date.getFullYear();
							var month: any = date.toLocaleString('default', {
								month: 'long',
							});
							var dt: any = date.getDate();

							if (dt < 10) {
								dt = '0' + dt;
							}
							if (month < 10) {
								month = '0' + month;
							}

							return (
								<TableRow
									key={index}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									onClick={() => handleClickOpen(row, row.id.value)}>
									<TableCell
										component='th'
										scope='row'
										className={classes.startCell}>
										<div className={classes.firstCell}>
											<img
												className={classes.userImg}
												src={row.picture.large}
											/>
											<div className={classes.userFullName}>
												<Typography className={classes.cellText}>
													{row.name.first} {row.name.last}
												</Typography>
												<Typography className={classes.tableText}>
													{row.location.street.number}{' '}
													{row.location.street.name}, {row.location.city}
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
										<Typography className={classes.cellText}>
											{month + ' ' + dt + ', ' + year}
										</Typography>
										<Typography className={classes.tableText}>
											{hours + ':' + minutes + ' ' + ampm}
										</Typography>
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
							);
						})}
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
