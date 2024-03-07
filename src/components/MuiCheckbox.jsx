import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useState } from "react";

function MuiCheckbox() {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSkills = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  console.log("checked", checked);
  console.log("skills", skills);
  return (
    <Box>
      {/* only one check box starts */}
      <Box>
        <FormControlLabel
          label="Please accept terms and conditions"
          control={<Checkbox checked={checked} onChange={handleChange} />}
        />
      </Box>
      {/* only one check box end */}

      {/* multiple check box start */}
      <Box>
        <FormControl
          sx={{ m: 3 }}
          component="fieldset"
          variant="outlined"
          error={skills.length === 0}
        >
          <FormLabel component="legend">Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="javaScript"
                  checked={skills.includes("javaScript")}
                  onChange={handleSkills}
                />
              }
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkills}
                />
              }
              label="Html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkills}
                />
              }
              label="CSS"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Box>
      {/* multiple check box end */}
    </Box>
  );
}

export default MuiCheckbox;
