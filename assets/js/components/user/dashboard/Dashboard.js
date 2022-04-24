import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import DashboardLayout from '../layout/DashboardLayout';

function DashboardContent() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        {/* Chart */}
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

export default function Dashboard() {
  return <DashboardContent />;
}
