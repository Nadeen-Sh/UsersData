import { Routes, Route, Link } from 'react-router-dom';
import Users from './screens/users screen/Users';

const Routers = (props: any) => {
	return (
		<Routes>
			<Route path='/' element={<Users />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users/:userId' element={<Users />} />
		</Routes>
	);
};

export default Routers;
