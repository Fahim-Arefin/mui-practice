import { Box, Grid, Paper, Stack } from "@mui/material";

function MuiLayout() {
  return (
    <Paper
      sx={{
        padding: "32px",
        backgroundColor: "#fffff3",
        margin: "100px",
      }}
      elevation={4}
    >
      <Stack
        sx={{
          border: "1px solid",
          width: "50%",
          margin: "100px auto ",
        }}
        direction="row"
        justifyContent="center"
        spacing={4}
      >
        {/* <Box>Alternative to div</Box> */}
        {/* <Box component="span">render as span</Box> */}
        <Box
          p={2} // 2 * 8 = 16px
          height="100px"
          width="100px"
          bgcolor="success.dark"
          component="section"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          render as section
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            padding: "16px",
            height: "100px",
            width: "100px",
            "&:hover": {
              backgroundColor: "primary.dark",
              cursor: "pointer",
            },
            "&:active": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Alternative to div
        </Box>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box bgcolor="secondary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={2}>
        <Grid item xs>
          <Box bgcolor="secondary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor="secondary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="secondary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="secondary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
