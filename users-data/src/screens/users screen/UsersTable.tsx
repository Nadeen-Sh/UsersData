import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import axios from 'axios';

const UsersTable: React.FC<any> = () => {
	const [rows, setRows] = useState<any>([]);

	useEffect(() => {
		axios
			.get(`https://randomuser.me/api?results=8`)
			.then(({ data }) => {
				setRows(data.results);
				console.log(data);
			})
			.catch((err: any) => console.log(err));
	}, []);

	return (
		<>
			<TableContainer>
				<Table sx={{ float: 'right' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>User</TableCell>
							<TableCell align='right'>Contact Information</TableCell>
							<TableCell align='right'>Registration Date</TableCell>
							<TableCell align='right'>Country/Post Code</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row: any, index: number) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.name.first}
								</TableCell>
								<TableCell align='right'>{row.email}</TableCell>
								<TableCell align='right'>{row.registered.date}</TableCell>
								<TableCell align='right'>{row.location.country}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
export default UsersTable;
