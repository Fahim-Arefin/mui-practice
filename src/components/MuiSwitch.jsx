import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Switch,
} from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
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
      {/* only one switch box starts */}
      <Box>
        <FormControlLabel
          label="Please accept terms and conditions"
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>
      {/* only one switch box end */}

      {/* multiple switch box start */}
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
                <Switch
                  value="javaScript"
                  checked={skills.includes("javaScript")}
                  onChange={handleSkills}
                />
              }
              label="JavaScript"
            />
            <FormControlLabel
              control={
                <Switch
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkills}
                />
              }
              label="Html"
            />
            <FormControlLabel
              control={
                <Switch
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
      {/* multiple switch box end */}
    </Box>
  );
}

export default MuiSwitch;
