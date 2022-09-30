import SearchIcon from "@mui/icons-material/Search";
import { TextField, Box } from "@mui/material";
import { useState } from "react";

const SearchBar = ({ setSearchValue }) => {
  const [value, setValue] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearchValue(value);
    }
  };
  return (
    <Box
      sx={{
        ml: "auto",
        width: "85%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchIcon color="primary" />
      <TextField
        onKeyDown={handleKeyDown}
        variant="standard"
        height="100"
        sx={{ width: "100%", ml: "1%" }}
        placeholder="search job..."
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
