import { DeleteForever, DriveFileRenameOutline, Info } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

export const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    // delete item

    console.log(id + " has been deleted");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      return (
        <Stack direction="row">
          <Link
            to={`/${props.slug}/${params.row.id}`}
            style={{ textDecoration: "none" }}
          >
            <IconButton>
              <Info htmlColor="lightblue" />
            </IconButton>
          </Link>
          {/* <div
            className="deleteButton"
            onClick={() => handleDelete(params.row.id)}
          >
            <IconButton>
              <DeleteForever htmlColor="purple" />
            </IconButton>
          </div> */}
        </Stack>
      );
    },
  };

  return (
    <DataGrid
      sx={{
        "& .MuiDataGrid-toolbarContainer": {
          flexDirection: "row-reverse",
          padding: "10px",
        },
      }}
      rows={props.rows}
      columns={[...props.columns, actionColumn]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      pageSizeOptions={[10]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
    />
  );
};
