import { Routes, Route, Link } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

const Routers = (props: any) => {
	return (
		<Routes>
			<Route path='/' element={<SideBar />} />
		</Routes>
	);
};

export default Routers;
