import React from "react";
import MUIDataTable from "mui-datatables";

export default function DataTable({ columns, data, options }) {
  return (
    <MUIDataTable
      title={"User List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
