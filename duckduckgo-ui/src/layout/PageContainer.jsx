import React from 'react'
import Box from "@mui/material/Box";


const PageContainer = ({ children }) => {
  return (
    <Box className="main_container"  
    sx={{ minHeight: "100vh", pt: 10 }}
    >{children}</Box>
     )
}

export default PageContainer