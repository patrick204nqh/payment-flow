import { useContext } from "react";
import LayoutContext from '../../../../context/LayoutContext';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Toolbar, IconButton, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptIcon from '@mui/icons-material/Receipt';

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
  const value = useContext(LayoutContext);
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
         <ListItemButton component="a" href="/admin/dashboard">
           <ListItemIcon>
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Dashboard" />
         </ListItemButton>
         <ListItemButton component="a" href="/admin/users">
           <ListItemIcon>
             <PeopleIcon />
           </ListItemIcon>
           <ListItemText primary="Users" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <ShoppingCartIcon />
           </ListItemIcon>
           <ListItemText primary="Orders" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <ReceiptIcon />
           </ListItemIcon>
           <ListItemText primary="Invoices" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <InventoryIcon />
           </ListItemIcon>
           <ListItemText primary="Products" />
         </ListItemButton>
         <ListItemButton>
           <ListItemIcon>
             <SettingsIcon />
           </ListItemIcon>
           <ListItemText primary="Settings" />
         </ListItemButton>
       </List>
     </Drawer>
  )
}
