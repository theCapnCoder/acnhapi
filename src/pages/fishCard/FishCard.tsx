import React, { useEffect } from "react";
import { Fish } from "../fish/type";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

interface FishCardProps {
  data?: Fish;
}

const FishCard = ({ data }: FishCardProps) => {
  const [fish, setFish] = React.useState([]);
  const param = useParams();

  useEffect(() => {
    if (fish.length === 0) {
      axios.get(`https://acnhapi.com/v1/fish/${param.id}`).then((res) => {
        setFish(res.data);
        console.log(res.data);
      });
    }
  }, [fish, param]);

  return (
    <Box>
      <Typography>Fish Info</Typography>
      {fish && <Typography>Fish</Typography>}
    </Box>
  );
};

export default FishCard;
