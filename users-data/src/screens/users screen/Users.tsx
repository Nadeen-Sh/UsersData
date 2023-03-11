import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
import UsersStyle from './Users.style';
import userLogo from '../../assets/user.png';
import UsersTable from './UsersTable';
import FilterComponent from '../../components/filters/Filter';
import axios from 'axios';

const UsersComponent: React.FC<any> = () => {
	const classes = UsersStyle();
	const [gender, setGender] = useState<any>('');
	const [nationality, setNationality] = useState<any>('');
	const [nat, setNat] = useState<any>([]);
	const [rows, setRows] = useState<any>([]);

	const genderOptions = ['female', 'male'];

	const handleChange = (event: any, value: any) => {
		setGender(value);
	};

	const handleChangeNationality = (event: any, value: any) => {
		setNationality(value);
	};
	console.log(nationality, 'd', nat);

	useEffect(() => {
		if (gender) {
			axios
				.get(`https://randomuser.me/api/?gender=${gender}`)
				.then(({ data }) => {
					setRows(data.results);
					console.log(data);
				})
				.catch((err: any) => console.log(err));
		} else if (nationality) {
			setNationality(nationality.toLowerCase());
			axios
				.get(`https://randomuser.me/api/?results=8&nat=${nationality}`)
				.then(({ data }) => {
					setRows(data.results);
				})
				.catch((err: any) => console.log(err));
		} else {
			axios
				.get(`https://randomuser.me/api?results=8`)
				.then(({ data }) => {
					setRows(data.results);
				})
				.catch((err: any) => console.log(err));
		}
		rows.map((data: any) => {
			nat.push(data.nat.toLowerCase());
		});
	}, [gender, nationality]);

	return (
		<div className={classes.page}>
			<div className={classes.header}>
				<Typography className={classes.title}>Users</Typography>
				<div className={classes.userContainer}>
					<Typography className={classes.userName}>Jones Ferdinand</Typography>
					<div className={classes.imgContainer}>
						<img src={userLogo} alt='user' className={classes.userImg} />
					</div>
				</div>
			</div>
			<Paper className={classes.tablePaper}>
				<div className={classes.allUserContainer}>
					<Typography className={classes.title}>All Users</Typography>
					<div className={classes.userContainer}>
						<FilterComponent
							className={classes.genderFilter}
							value={gender}
							label='Gender'
							handleChange={(event: any, value: any) =>
								handleChange(event, value)
							}
							options={genderOptions}
						/>
						<FilterComponent
							value={nationality}
							label='Nationality'
							handleChange={(event: any, value: any) =>
								handleChangeNationality(event, value)
							}
							options={nat}
						/>
					</div>
				</div>

				<UsersTable rows={rows} />
			</Paper>
		</div>
	);
};
export default UsersComponent;
