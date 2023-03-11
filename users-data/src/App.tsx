import React from 'react';
import './App.css';
import Routers from './routes';
import SideBarComponent from './components/sidebar/SideBar';

function App() {
	return (
		<div className='App'>
			<SideBarComponent />
			<Routers />
		</div>
	);
}

export default App;
