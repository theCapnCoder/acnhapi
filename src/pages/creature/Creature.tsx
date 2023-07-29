import { Avatar, CircularProgress, Stack, Typography } from "@mui/material";
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
  {
    field: "catch-phrase",
    type: "string",
    headerName: "Phrase",
    width: 200,
  },
];

type Props = {
  name: string;
  creatureType: string;
};

const Creature: React.FC<Props> = ({ name, creatureType }) => {
  const fish = useAppSelector(selectAllFish);
  const fishStatus = useAppSelector(getFishStatus);
  const fishError = useAppSelector(getFishError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllFish(creatureType));
  }, [creatureType, dispatch]);

  let content;
  if (fishStatus === "loading") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <CircularProgress />
      </Stack>
    );
  } else if (fishStatus === "success") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <DataTable
          slug={creatureType}
          columns={columns}
          rows={Object.values(fish)}
        />
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
      <Typography variant="h3">{name}</Typography>
      {content}
    </Stack>
  );
};

export default Creature;
