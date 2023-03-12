import React from 'react';
import './App.css';
import Routers from './routes';
import SideBarComponent from './components/sidebar/SideBar';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './theme/theme';

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<div className='App'>
				<SideBarComponent />
				<Routers />
			</div>
		</ThemeProvider>
	);
}

export default App;
