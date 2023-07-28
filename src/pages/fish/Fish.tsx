import {
  Avatar,
  Box,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import {
  getFishError,
  getFishStatus,
  selectAllFish,
} from "../../redux/selectors/fish/fishSelectors";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getAllFish } from "../../redux/reducers/fishReducer/actionCreators/getAllFish";
import { DataTable } from "../../components/dataTable";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "icon",
    headerName: "Icon",
    width: 80,
    renderCell: (params) => {
      return <Avatar alt="Remy Sharp" src={params.row.icon_uri} />;
    },
  },
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
      return params.row['file-name'][0].toUpperCase() + params.row['file-name'].slice(1);
    }
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "catch-phrase",
    type: "string",
    headerName: "Phrase",
    width: 200,
  },
  // {
  //   field: "producer",
  //   type: "string",
  //   headerName: "Producer",
  //   width: 200,
  // },
  // {
  //   field: "createdAt",
  //   type: "string",
  //   headerName: "Created at",
  //   width: 200,
  // },
  // {
  //   field: "inStock",
  //   headerName: "In Stock",
  //   width: 150,
  //   type: "boolean",
  // },
];

const Fish = () => {
  const fish = useAppSelector(selectAllFish);
  const fishStatus = useAppSelector(getFishStatus);
  const fishError = useAppSelector(getFishError);
  console.log(fish);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (fishStatus === "idle") {
      dispatch(getAllFish());
    }
  }, [dispatch, fishStatus]);

  let content;
  if (fishStatus === "loading") {
    console.log("loading");
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <CircularProgress />
      </Stack>
    );
  } else if (fishStatus === "success") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <DataTable slug="fish" columns={columns} rows={Object.values(fish)} />
      </Stack>
    );
  } else if (fishStatus === "failed") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <Typography variant="h3">{fishError}</Typography>
      </Stack>
    );
  }

  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
      <Typography variant="h3">Fish</Typography>
      {content}
    </Stack>
  );
};

export default Fish;
