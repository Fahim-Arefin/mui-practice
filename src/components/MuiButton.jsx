import { Button, Stack } from "@mui/material";

function MuiButton() {
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

      {/* button with icons */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          asd
        </Button>
        <Button variant="contained" color="secondary">
          asd
        </Button>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
