import {
  Avatar,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { DataTable } from "../../components/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import {
  getFossilsError,
  getFossilsStatus,
  selectAllFossils,
} from "../../redux/selectors/fossils/fossilsSelector";
import { getAllFossils } from "../../redux/reducers/fossilsReducer/actionCreators/getAllFossils";
import { Fossil } from "../../redux/reducers/fossilsReducer/type";
import { nanoid } from "@reduxjs/toolkit";

const columns: GridColDef[] = [
  {
    field: "picture",
    headerName: "Picture",
    width: 80,
    renderCell: (params) => {
      return <Avatar alt="Remy Sharp" src={params.row.image_uri} />;
    },
  },
  {
    field: "file-name",
    type: "string",
    headerName: "Name",
    width: 150,
    renderCell: (params) => {
      return (
        params.row["file-name"][0].toUpperCase() +
        params.row["file-name"].slice(1)
      );
    },
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
];

const Fossils = () => {
  const fossils = useAppSelector(selectAllFossils);
  const fossilsStatus = useAppSelector(getFossilsStatus);
  const fossilsError = useAppSelector(getFossilsError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFossils());
  }, [dispatch]);

  const formatData = (data: any): Fossil[] => {
    return Object.values(data).map((item: any) => ({
      ...item,
      id: nanoid(),
    }));
  };

  let content;
  if (fossilsStatus === "loading") {
    content = <CircularProgress />;
  } else if (fossilsStatus === "success") {
    content = (
      <Box>
        <DataTable
          slug="fossils"
          columns={columns}
          rows={formatData(fossils)}
        />
      </Box>
    );
  } else if (fossilsStatus === "failed") {
    content = <Typography variant="h3">{fossilsError}</Typography>;
  }

  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
      <Typography variant="h3">Fossils</Typography>

      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        {content}
      </Stack>
    </Stack>
  );
};

export default Fossils;
