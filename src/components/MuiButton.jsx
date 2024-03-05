import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

function MuiButton() {
  const [alignment, setAlignment] = useState([]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  console.log("alignment", alignment);

  return (
    <Stack spacing={4}>
      {/* normal buttons start */}
      <Stack direction="row" spacing={2}>
        <Button variant="text" href="https://www.youtube.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      {/* normal buttons ends */}

      {/* contained color buttons starts */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
      </Stack>
      {/* contained color buttons ends */}

      {/* text color buttons starts */}
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
      </Stack>
      {/* text color buttons ends */}
      {/* outlined color buttons starts */}
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
      </Stack>
      {/* outlined color buttons ends */}

      {/* contained color buttons with different size starts */}
      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" color="primary" size="large">
          large
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="warning" size="small">
          small
        </Button>
      </Stack>
      {/* contained color buttons with different size ends */}

      {/* button with icons, iconButton, disabble ripple,elevation starts*/}
      <Stack display="block" direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("clicked!")}
        >
          send
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          disableElevation
        >
          send
        </Button>
        <IconButton aria-label="icon" color="info" size="large">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* button with icons, iconButton, disabble ripple,elevation starts*/}

      {/* Button groups start*/}
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="text" orientation="horizontal">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="horizontal"
          color="success"
          size="small"
          aria-label="small outlined button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      {/* Button groups end*/}

      {/* Button groups starts */}
      <Stack direction="row">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          onChange={handleChange}
          aria-label="Platform"
          // exclusive
          size="small"
          orientation="vertical"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* Button groups starts */}
    </Stack>
  );
}

export default MuiButton;
