import React from 'react';
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

const UsersTable: React.FC<any> = (props: any) => {
	const classes = UsersStyle();
	const { rows, rowsPerPage, handleChangePage, handleChangeRowsPerPage, page } =
		props;

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
									<div className={classes.firstCell}>
										<img className={classes.userImg} src={row.picture.large} />
										<div className={classes.userFullName}>
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
			<TablePagination
				rowsPerPageOptions={[8, 16]}
				component='div'
				count={16}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</>
	);
};
export default UsersTable;
