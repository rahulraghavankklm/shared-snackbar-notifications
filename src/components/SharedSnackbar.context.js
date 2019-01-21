import React, { Component } from "react";
import SharedSnackbar from "./SharedSnackbar";

export const SharedSnackbarContext = React.createContext(null);

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      message: ""
    };
  }

  handleOpenSnackbar = message => {
    this.setState({
      isOpen: true,
      message: message
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      isOpen: false,
      message: ""
    });
  };

  render() {
    return (
      <SharedSnackbarContext.Provider
        value={{
          isOpen: this.state.isOpen,
          message: this.state.message,
          openSnackbar: this.handleOpenSnackbar,
          closeSnackbar: this.handleCloseSnackbar
        }}
      >
        <SharedSnackbar />
        <div>{this.props.children}</div>
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
