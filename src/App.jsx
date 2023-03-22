import { useState } from "react";
import "./App.css";
import Countries from "./components/Country";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}
