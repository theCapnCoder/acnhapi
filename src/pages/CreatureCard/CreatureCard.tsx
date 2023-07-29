import React, { useEffect } from "react";
import { Fish } from "../creature/type";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Fab,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowBack, Scale } from "@mui/icons-material";
import DetailsComponent from "../../components/detailsTable/DetailsTable";

interface CreatureCardProps {
  creatureType: string;
  data?: Fish;
}

const CratureCard = ({creatureType,  data }: CreatureCardProps) => {
  const [fish, setFish] = React.useState<Fish | null>(null);
  const param = useParams();
  const navigate = useNavigate();

  const [transletedWord, setTransletedWord] = React.useState("");

  useEffect(() => {
    if (fish === null) {
      axios.get(`https://acnhapi.com/v1/${creatureType}/${param.id}`).then((res) => {
        setFish(res.data);
        console.log(res.data);
      });
    }
  }, [fish, param]);

  return (
    <Box p={10}>
      {fish && (
        <Box>
          <Stack direction={"row"} spacing={5} mb={3}>
            <Box
              component={"img"}
              src={fish.image_uri}
              sx={{
                pt: 2,
                width: "20%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Stack spacing={1}>
              <Typography variant="h3">
                Name:
                {fish["file-name"][0].toUpperCase() +
                  fish["file-name"].slice(1)}
              </Typography>
              <Typography variant="h4">Price: {fish.price}</Typography>
              <Typography variant="h4">
                Price-cj: {fish["price-cj"]}{" "}
              </Typography>
              <Typography>Catch Phrase: {fish["catch-phrase"]}</Typography>
              <Typography>Museum Phrase: {fish["museum-phrase"]}</Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={Object.keys(fish.name)}
                  onChange={(event, value) => {
                    setTransletedWord(fish.name[value as string]);
                  }}
                  sx={{ width: 300, pt: 2 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Choose language" />
                  )}
                />
                <Typography
                  variant="h4"
                  sx={{ pt: 2, textTransform: "capitalize" }}
                >
                  Result: {transletedWord}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <DetailsComponent availability={fish.availability} />
        </Box>
      )}

      <Fab
        color="primary"
        aria-label="Back"
        onClick={() => navigate(-1)}
        sx={{ position: "fixed", bottom: 30, right: 30 }}
      >
        <ArrowBack />
      </Fab>
    </Box>
  );
};

export default CratureCard;
