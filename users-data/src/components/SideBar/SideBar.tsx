import React from 'react';
import {
	Drawer,
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
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 255;

const SideBarComponent: React.FC<any> = () => {
	const classes = sideBarStyle();
	const theme = useTheme();
	const navigate = useNavigate();

	return (
		<div>
			<Drawer
				sx={{
					width: drawerWidth,
					backgroundColor: theme.palette.primary.main,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: theme.palette.primary.main,
					},
				}}
				variant='permanent'
				anchor='left'>
				<div className={classes.iconContainer}>
					<img src={logo} alt='logo' className={classes.icon} />
				</div>
				<List>
					{['Overview', 'Tickets', 'Ideas', 'Users'].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton
								className={classes.listOptionText}
								onClick={() => navigate(`/${text.toLocaleLowerCase()}/`)}>
								<ListItemIcon className={classes.listOption}>
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
