import React, { Component } from "react";
import Main from "./components/main";
import Topbar from "./components/topBar";
import Footer from "./pages/footer";
import "./App.css";
import Header from "./components/headerComponents/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
