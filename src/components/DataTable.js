import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "temperatura",
    headerName: "Temperatura",
    width: 130,
    type: "number",
  },
  { field: "distancia", headerName: "Distancia", width: 130, type: "number" },
  {
    field: "tiempo",
    headerName: "Tiempo",
    width: 250,
  },
];

const defaultSortModel = [
  {
    field: "tiempo",
    sort: "desc", // 'asc' for ascending, 'desc' for descending
  },
];

export default function DataTable({ dataRows }) {
  const generateId = () => {
    return Math.floor(Math.random() * 10000); // Replace with a more robust method if needed
  };

  const getRowId = (row) => row.id || generateId();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={dataRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={getRowId}
        sortModel={defaultSortModel}
      />
    </div>
  );
}
