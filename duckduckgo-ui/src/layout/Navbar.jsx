import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

export default function NavBar({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={2}>
        <Toolbar>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
