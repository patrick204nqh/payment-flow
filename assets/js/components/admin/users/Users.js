import React from "react";
import { useQuery } from "@apollo/client";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import DataTable from '../../partials/datatable/DataTable';
import DashboardLayout from '../layout/DashboardLayout';

const USERS_QUERY = loadSchemaSync('./UsersQuery.gql', { loaders: [new GraphQLFileLoader()] });

export default function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const columns = [
    {
      name: "id",
      label: "ID",
    },
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <DashboardLayout>
      <DataTable columns={columns} options={options} data={data.users} />
    </DashboardLayout>
  );
}
