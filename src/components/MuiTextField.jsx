import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

function MuiTextField() {
  const [name, setName] = useState("");

  return (
    <Stack spacing={4}>
      {/* basic text fields start */}
      <Stack spacing={2} direction="row">
        <TextField variant="outlined" label="outlined" />
        <TextField variant="filled" label="filled" />
        <TextField variant="standard" label="standard" />
      </Stack>
      {/* basic text fields end */}

      {/* color,size,type,required,helpertext text fields start */}
      <Stack spacing={2} direction="row">
        <TextField
          variant="outlined"
          label="small success"
          color="success"
          size="small"
          disabled
        />
        <TextField
          label="small warning requeird"
          color="warning"
          size="small"
          required
        />
        <TextField
          type="password"
          required
          helperText="this field is required"
          label="Password"
          size="small"
        />
        <TextField
          helperText="this field is required"
          label="Read Only"
          size="small"
          InputProps={{ readOnly: true }}
          value="hello"
        />
      </Stack>
      {/* color,size,type,required,helpertext text fields end */}

      {/* InputAdornment start */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {/* InputAdornment end*/}

      {/* validate a text field start */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          required
          helperText={!name && "This field is required"}
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!name}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
