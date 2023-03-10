import React from 'react';
import {
	Drawer,
	Toolbar,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import PieChartIcon from '@mui/icons-material/PieChart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Person2Icon from '@mui/icons-material/Person2';
import logo from '../../assets/logo-white-small 1.png';
import sideBarStyle from './SideBar.style';

const drawerWidth = 255;
const classes = sideBarStyle();

const SideBarComponent: React.FC<any> = () => {
	return (
		<div>
			<Drawer
				sx={{
					width: drawerWidth,
					backgroundColor: '#363740',
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: '#363740',
					},
				}}
				variant='permanent'
				anchor='left'>
				<Toolbar />
				<div className={classes.iconContainer}>
					<img src={logo} alt='logo' className={classes.icon} />
				</div>
				<List>
					{['Overview', 'Tickets', 'Ideas', 'Users'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton style={{ color: '#A4A6B3' }}>
								<ListItemIcon style={{ color: '#A4A6B3' }}>
									{index === 0 ? (
										<PieChartIcon />
									) : index === 1 ? (
										<ConfirmationNumberIcon />
									) : index === 2 ? (
										<LightbulbIcon />
									) : (
										<Person2Icon />
									)}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
};

export default SideBarComponent;
