import { useState } from "react";
import "./App.css";
import Carocel from "./components/Carocel";
import Navbar from "./components/Navbar";
import BulkOrder from "./pages/BulkOrder/BulkOrder";
import ConstactUs from "./pages/constactUs/ConstactUs";
import Installation from "./pages/installation/Installation";
import Faqs from "./pages/faqs/Faqs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Installation />
    </div>
  );
}

export default App;
