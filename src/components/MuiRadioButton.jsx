import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

function MuiRadioButton() {
  const [experience, setExperience] = useState("");

  const handleChange = (event) => {
    setExperience(event.target.value);
  };

  console.log("experience: ", experience);
  return (
    // basic radio button start
    <FormControl error={!experience}>
      <FormLabel id="experience">Years of experience</FormLabel>
      <RadioGroup
        aria-labelledby="experience"
        value={experience}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value="1"
          control={<Radio size="small" color="secondary" />}
          label="1"
        />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
        <FormControlLabel value="5" control={<Radio />} label="5" />
      </RadioGroup>
      <FormHelperText>Please select your years of experience</FormHelperText>
    </FormControl>
    // basic radio button end
  );
}

export default MuiRadioButton;
