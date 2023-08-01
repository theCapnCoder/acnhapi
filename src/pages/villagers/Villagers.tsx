import { Avatar, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { DataTable } from "../../components/dataTable";
import { GridColDef } from "@mui/x-data-grid";
import { getAllVillagers } from "../../redux/reducers/villagersReducer/actionCreators";
import {
  getVillagersError,
  getVillagersStatus,
  selectAllVillagers,
} from "../../redux/selectors/vallagers/villagersSelector";
import { Villager } from "../../redux/reducers/villagersReducer/type";

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
    width: 100,
    renderCell: (params) => {
      return (
        params.row["file-name"][0].toUpperCase() +
        params.row["file-name"].slice(1)
      );
    },
  },
  {
    field: "personality",
    type: "string",
    headerName: "Personality",
    width: 120,
  },
  {
    field: "species",
    type: "string",
    headerName: "Species",
    width: 120,
  },
  {
    field: "birthday",
    type: "string",
    headerName: "Birthday",
    width: 120,
  },
  {
    field: "gender",
    type: "string",
    headerName: "Gender",
    width: 100,
  },
];

const Villagers = () => {
  const villagers = useAppSelector(selectAllVillagers);
  const villagersStatus = useAppSelector(getVillagersStatus);
  const villagersError = useAppSelector(getVillagersError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllVillagers());
  }, [dispatch]);

  let content;
  if (villagersStatus === "loading") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <CircularProgress />
      </Stack>
    );
  } else if (villagersStatus === "success") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <DataTable
          slug={"villagers"}
          columns={columns}
          rows={Object.values(villagers)}
        />
      </Stack>
    );
  } else if (villagersStatus === "failed") {
    content = (
      <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
        <Typography variant="h3">{villagersError}</Typography>
      </Stack>
    );
  }

  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexGrow={1}>
      <Typography variant="h3">Villagers</Typography>
      {content}
    </Stack>
  );
};

export default Villagers;
