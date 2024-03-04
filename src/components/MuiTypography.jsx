import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        h1 headline
      </Typography>
      <Typography variant="h2">h2 headline </Typography>
      <Typography variant="h3">h3 headline </Typography>
      <Typography variant="h4">h4 headline </Typography>
      <Typography variant="h5">h5 headline </Typography>
      <Typography variant="h6">h6 headline </Typography>
      <Typography variant="h6" component="h1">
        h6 headline{" "}
      </Typography>
      <Typography variant="subtitle1">subtitle 1 </Typography>
      <Typography variant="subtitle2">subtitle 2 </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio neque
        autem excepturi ea. Nulla explicabo, alias, impedit id voluptatem
        similique doloremque numquam minus, debitis nostrum iste. Exercitationem
        facere minus sequi.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio neque
        autem excepturi ea. Nulla explicabo, alias, impedit id voluptatem
        similique doloremque numquam minus, debitis nostrum iste. Exercitationem
        facere minus sequi.
      </Typography>
    </>
  );
}

export default MuiTypography;
