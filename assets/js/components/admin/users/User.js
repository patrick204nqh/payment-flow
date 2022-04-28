import React from "react";
import { Grid, Item } from '@mui/material'
import DashboardLayout from '../layout/DashboardLayout';
import AvatarUpload from './partials/image/AvatarUpload';
import UserForm from './partials/form/UserForm';

export default function User({ user }) {
  return (
    <DashboardLayout>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={4}>
          <AvatarUpload />
        </Grid>
        <Grid item xs={8}>
          <UserForm user={user}/>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
