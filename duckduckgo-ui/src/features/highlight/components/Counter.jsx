import React from "react";
import Box from "@mui/material/Box";

const Counter = ({ count }) => {

  return (
    <Box
      sx={{
        px: 2,
        borderLeft: "1px solid rgba(0, 0, 0, .2)",
        color: "rgba(0, 0, 0, .4)",
        minWidth: "60px",
      }}
    >
      {count}
    </Box>
  );
};

export default Counter;
