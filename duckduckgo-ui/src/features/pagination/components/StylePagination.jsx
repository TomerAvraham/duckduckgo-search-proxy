import React from 'react'
import Box from "@mui/material/Box"
import Pagination from "@mui/material/Pagination"

const StylePagination = (props) => {
  return (
    <Box className="pagination_container" >
      <Pagination
        color="primary"
        {...props}
        showFirstButton
        showLastButton
      />
    </Box>
  )
}

export default StylePagination