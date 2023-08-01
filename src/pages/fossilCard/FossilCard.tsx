import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Fossil } from "../../redux/reducers/fossilsReducer/type";

const FossilCard = () => {
  const [fossil, setFossil] = React.useState<Fossil | null>(null);
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (fossil === null) {
      axios.get(`https://acnhapi.com/v1/fossils/${param.id}`).then((res) => {
        setFossil(res.data);
        console.log(res.data);
      });
    }
  }, [fossil, param]);

  return (
    <Box p={10}>
      {fossil && (
        <Box>
          <Stack direction={"row"} spacing={5} mb={3}>
            <Box
              component={"img"}
              src={fossil.image_uri}
              sx={{
                pt: 2,
                width: "20%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Stack spacing={1}>
              <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
                Name: {fossil["file-name"]}
              </Typography>
              <Typography variant="h4">Price: {fossil.price}</Typography>
              <Typography>Museum Phrase: {fossil["museum-phrase"]}</Typography>
            </Stack>
          </Stack>
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

export default FossilCard;
