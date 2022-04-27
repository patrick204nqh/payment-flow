import React from "react";
import { useQuery } from "@apollo/client";
import DataTable from '../../partials/datatable/DataTable';
import DashboardLayout from '../layout/DashboardLayout';
import UsersQuery from './UsersQuery.gql'

export default function Users() {
  const { loading, error, data } = useQuery(UsersQuery);
  const columns = [
    {
      name: "id",
      label: "ID",
    },
    {
      name: "username",
      label: "Username",
    },
    {
      name: "firstName",
      label: "First name",
    },
    {
      name: "lastName",
      label: "Last name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phone",
      label: "Phone",
    },
  ];

  const options = {
    filterType: 'checkbox',
    // responsive: 'stacked',
    sort: false,
    onRowClick: (rowData, rowMeta) => (window.location.href = `/admin/users/${rowData[0]}`)
  };

  return (
    <DashboardLayout>
      <DataTable columns={columns} options={options} data={data?.users} />
    </DashboardLayout>
  );
}
