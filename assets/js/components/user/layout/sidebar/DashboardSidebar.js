import { useContext } from "react";
import AppContext from '../../../../context/AppContext';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Toolbar, IconButton, Divider, List
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

export default function DashboardSidebar() {
  const value = useContext(AppContext);
  let { showDrawer } = value.state;
  let { toggleDrawer } = value.handle;

  return (
    <Drawer variant="permanent" open={showDrawer}>
       <Toolbar
         sx={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'flex-end',
           px: [1],
         }}
       >
         <IconButton onClick={toggleDrawer}>
           <ChevronLeftIcon />
         </IconButton>
       </Toolbar>
       <Divider />
       <List component="nav">
         {mainListItems}
         <Divider sx={{ my: 1 }} />
         {secondaryListItems}
       </List>
     </Drawer>
  )
}
