import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {
  data: {
    [key: string]: string;
  };
};

const Translate: React.FC<Props> = ({ data }) => {
  const [transletedWord, setTransletedWord] = React.useState("");

  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Object.keys(data)}
        onChange={(event, value) => {
          if (value) {
            setTransletedWord(data[value as string]);
          }
        }}
        sx={{ width: 300, pt: 2 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose language" />
        )}
      />
      <Typography variant="h4" sx={{ pt: 2, textTransform: "capitalize" }}>
        Result: {transletedWord}
      </Typography>
    </Stack>
  );
};

export default Translate;
