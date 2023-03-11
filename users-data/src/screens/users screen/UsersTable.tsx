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
import axios from 'axios';
import UsersStyle from './Users.style';

const UsersTable: React.FC<any> = (props: any) => {
	const [rows, setRows] = useState<any>([]);
	const classes = UsersStyle();
	const { gender } = props;

	useEffect(() => {
		if (!gender) {
			axios
				.get(`https://randomuser.me/api?results=8`)
				.then(({ data }) => {
					setRows(data.results);
					console.log(data);
				})
				.catch((err: any) => console.log(err));
		} else {
			axios
				.get(`https://randomuser.me/api/?gender=${gender}`)
				.then(({ data }) => {
					setRows(data.results);
					console.log(data);
				})
				.catch((err: any) => console.log(err));
		}
	}, [gender]);

	return (
		<>
			<TableContainer>
				<Table sx={{ float: 'left' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='left' className={classes.headTable}>
								User
							</TableCell>
							<TableCell className={classes.headTable} align='left'>
								Contact Information
							</TableCell>
							<TableCell className={classes.headTable} align='left'>
								Registration Date
							</TableCell>
							<TableCell className={classes.headTable} align='left'>
								Country/Post Code
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row: any, index: number) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									<div style={{ display: 'flex', flexDirection: 'row' }}>
										<img className={classes.userImg} src={row.picture.large} />
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												paddingLeft: '30px',
											}}>
											<Typography className={classes.pText}>
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
										<Typography className={classes.pText}>
											{row.email}
										</Typography>
										<Typography className={classes.tableText}>
											{row.cell}
										</Typography>
									</div>
								</TableCell>
								<TableCell align='left' className={classes.pText}>
									{row.registered.date}
								</TableCell>
								<TableCell align='left'>
									<Typography className={classes.pText}>
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
		</>
	);
};
export default UsersTable;
