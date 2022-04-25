import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import Chart from './Chart';
import DashboardLayout from '../layout/DashboardLayout';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
