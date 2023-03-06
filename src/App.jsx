import { useState } from "react";
import "./App.css";
import BulkOrder from "./pages/BulkOrder/BulkOrder";
import ConstactUs from "./pages/constactUs/ConstactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Installation from "./pages/installation/Installation";
import Faqs from "./pages/faqs/Faqs";
import Home from "./pages/Home";
import Athentication from "./pages/athentication/Athentication";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bulk-order" element={<BulkOrder />} />
          <Route path="/contact-us" element={<ConstactUs />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/auth" element={<Athentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
