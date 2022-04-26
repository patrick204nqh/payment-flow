import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import {
  CssBaseline, Box, List, Typography, Container, Link, Toolbar, Grid, Paper
} from '@mui/material';
import LayoutContext from '../../../context/LayoutContext';
import DashboardNavbar from './navbar/DashboardNavbar';
import DashboardSidebar from './sidebar/DashboardSidebar';
import Copyright from '../../copyright/Copyright';

const mdTheme = createTheme();

export default function DashboardLayout(props) {
  const [showDrawer, setShowDrawer] = React.useState(true);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <LayoutContext.Provider
      value={{
        state: {
          showDrawer
        },
        handle: {
          toggleDrawer
        }
      }}>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DashboardNavbar />
          <DashboardSidebar />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              {props.children}
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </LayoutContext.Provider>
  )
}
