import {
  Button,
  Container,
  Box,
  Grid,
  Link,
  Typography,
  TextField,
} from "@mui/material";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const JobsLeftSide = () => {
  return (
    <>
      <Box sx={{ pl: "7%"}}>
        <Box>
          <Typography variant="h6" color="text.primary">
            Filters
          </Typography>
          <FormControl>
            <RadioGroup name="filter-radio-buttons-group">
              <FormControlLabel
                sx={{ color: "text.primary" }}
                value="allJobs"
                control={<Radio />}
                label="All Jobs"
              />
              <FormControlLabel
                sx={{ color: "text.primary" }}
                value="mostRelevant"
                control={<Radio />}
                label="Most Relevant"
              />
              <FormControlLabel
                sx={{ color: "text.primary" }}
                value="recommendedJobs"
                control={<Radio />}
                label="Recommended Jobs"
              />
              <FormControlLabel
                sx={{ color: "text.primary" }}
                value="mostRecent"
                control={<Radio />}
                label="Most Recent"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="text.primary">
            Select Location
          </Typography>
          <TextField
            placeholder="Location..."
            variant="outlined"
            size="small"
            sx={{ width: "90%", mt: "3%" }}
          />
        </Box>
        <Box sx={{ mt: 3, maxWidth: '90%' }}>
          <FormControl fullWidth>
            
            <InputLabel id="demo-simple-select-label">Type of Job</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Type of Job"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Full-time</MenuItem>
              <MenuItem value={20}>Part-time</MenuItem>
              <MenuItem value={30}>Freelance</MenuItem>
              <MenuItem value={40}>Remote</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 3, maxWidth: '90%' }}>
          <FormControl fullWidth>
            
            <InputLabel id="demo-simple-select-label">Type of Industries</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Type of Job"
              // onChange={handleChange}
            >
              <MenuItem value={10}>All Industries</MenuItem>
              <MenuItem value={20}>Local Industries</MenuItem>
              <MenuItem value={30}>Abroad Industries</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default JobsLeftSide;
