import React, { useState, useCallback } from "react";
import { Drawer, Box, Fab } from "@mui/material";
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import useToggle from "../hooks/useToggle"

const sidebarWidth = 220;

const SideBar = ({ children }) => {
  const [open, toggleOpen] = useToggle(false);

  const handleToggleOpen = useCallback(() => toggleOpen(prev => !prev), [toggleOpen]);

  return (
    <>
    
    <Fab 
      color="primary" 
      aria-label="add"
      className="toggle_sidebar_button"
      onClick={handleToggleOpen}
      >
        {open ? <SwitchRightIcon/> : <SwitchLeftIcon/> }
      </Fab>
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: sidebarWidth,
          boxSizing: "border-box",
        },
      }}
    >
            <Box sx={{ overflow: "auto" }}>
        {children}
      </Box>
    </Drawer>
    </>
  );
};

export default SideBar;
