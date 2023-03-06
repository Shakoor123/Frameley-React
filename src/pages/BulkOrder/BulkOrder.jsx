import React from "react";
import "./BulkOrder.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BulkOrderForm from "../../components/bulkOrderForm/BulkOrderForm";

const BulkOrder = () => {
  return (
    <div>
      <Navbar />
      <div className="bulkOrder section">
        <h2 className="bulkOrderTitle">
          Bulk Order Photo Frames Online in India At Wholesale Price
        </h2>
        <span className="bulkOrderText">
          Looking for a size that we don't offer or looking to order in bulk for
          your organization or project? Leave your details and requirements
          below and our expert team will be in touch with you shortly to help
          you!
        </span>
      </div>
      <BulkOrderForm />
      <Footer />
    </div>
  );
};

export default BulkOrder;
