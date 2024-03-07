import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

function MuiSelect() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const handleMultipleCountriesSelect = (event) => {
    setCountries(event.target.value);
  };
  console.log("country:", country);
  console.log("countries:", countries);
  return (
    <>
      {/* only one item select input fields start*/}
      <Box width="250px">
        <TextField
          label="select any country"
          select
          fullWidth
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="BD">Bangladesh</MenuItem>
        </TextField>
      </Box>
      {/* only one item select input fields end*/}

      {/* multiple item select input fields start*/}
      <Box width="250px" sx={{ marginTop: "20px" }}>
        <TextField
          label="select any country"
          select
          fullWidth
          value={countries}
          onChange={handleMultipleCountriesSelect}
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PK">Pakistan</MenuItem>
          <MenuItem value="BD">Bangladesh</MenuItem>
        </TextField>
      </Box>
      {/* multiple item select input fields end*/}
    </>
  );
}

export default MuiSelect;
