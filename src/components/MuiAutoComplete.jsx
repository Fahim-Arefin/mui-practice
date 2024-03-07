import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

function MuiAutoComplete() {
  const skills = ["html", "javaScript", "css", "react", "nodejs", "typeScript"];
  const [value, setValue] = useState(null);

  console.log("value", value);

  return (
    <Stack spacing={4} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="select skill" />}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        freeSolo
      />
    </Stack>
  );
}

export default MuiAutoComplete;
