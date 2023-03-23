import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ErrorMessage = ({ error }) => {
  return (
    <Alert sx={{ width: "100%" }} severity="error">
      <AlertTitle>Error occurred while searching</AlertTitle>
      Message: <strong>{error}</strong>
    </Alert>
  );
};

export default ErrorMessage;
