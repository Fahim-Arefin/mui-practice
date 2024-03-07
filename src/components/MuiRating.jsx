import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function MuiRating() {
  const [value, setValue] = useState(null);
  const [halfRating, setHalfRating] = useState(null);
  const [iconRating, setIconRating] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleHalfRating = (event, newValue) => {
    setHalfRating(newValue);
  };
  const handleIconRating = (event, newValue) => {
    setIconRating(newValue);
  };
  console.log("value", value);
  console.log("halfRating", halfRating);
  console.log("iconRating", iconRating);
  return (
    <Stack spacing={4}>
      {/* normal rating starts */}
      <Rating value={value} onChange={handleChange} />
      {/* normal rating ends */}

      {/* half rating starts */}
      <Rating
        value={halfRating}
        onChange={handleHalfRating}
        precision={0.5}
        size="large"
      />
      {/* half rating ends */}

      {/* Icon rating starts */}
      <Rating
        value={iconRating}
        onChange={handleIconRating}
        icon={<FavoriteSharpIcon color="success" />}
        emptyIcon={<FavoriteBorderSharpIcon />}
      />
      {/* Icon rating ends */}
    </Stack>
  );
}

export default MuiRating;
