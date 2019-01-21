import React from "react";
import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { SharedSnackbarConsumer } from "./SharedSnackbar.context";

const snackBarPosition = {
  vertical: "bottom",
  horizontal: "left"
};

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ isOpen, message, openSnackbar, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={snackBarPosition}
        open={isOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
            <Close />
          </IconButton>
        ]}
      />
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
