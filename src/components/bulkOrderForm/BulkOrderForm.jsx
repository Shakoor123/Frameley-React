import React from "react";
import "./BulkOrderForm.css";
const BulkOrderForm = () => {
  return (
    <div className="bulkOrderForm section">
      <div className="formContainer">
        <div className="formTop">
          <div className="formTopSection">
            <input type="text" placeholder="Name" className="Forminput" />
            <input type="text" className="Forminput" placeholder="Email" />
          </div>
          <div className="formTopSection">
            <input type="text" className="Forminput" placeholder="Mobile" />
            <input
              type="text"
              className="Forminput"
              placeholder="Preferred Mode of Communication"
            />
          </div>
          <div className="formBottom">
            <textarea
              name=""
              className="formTextArea"
              placeholder="Please Describe Your requirement"
              id=""
            ></textarea>
          </div>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderForm;
