import { Routes, Route, Link } from 'react-router-dom';
import Users from './screens/users screen/Users';
import NotFound from './screens/not found/NotFound';

const Routers = (props: any) => {
	return (
		<Routes>
			<Route path='/' element={<Users />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users/:userId' element={<Users />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Routers;
