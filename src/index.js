import React from "react";
import ReactDOM from "react-dom";
import { SharedSnackbarProvider } from "./components/SharedSnackbar.context";
import Header from "./components/Header";
import ButtonA from "./components/ButtonA";
import ButtonB from "./components/ButtonB";

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center"
  }
};

function App() {
  return (
    <div style={styles.app}>
      <SharedSnackbarProvider>
        <Header />
        <ButtonA />
        <ButtonB />
      </SharedSnackbarProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
