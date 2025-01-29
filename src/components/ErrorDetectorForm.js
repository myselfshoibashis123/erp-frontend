import React, { useState } from "react";
import "../styles/ErrorDetectorForm.css";

const ErrorDetectorForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    srfNo: "",
    date: "",
    probableDate: "",
    organization: "",
    address: "",
    contactPerson: "",
    mobileNumber: "",
    telephoneNumber: "",
    emailId: "",
  });

  // State for table rows
  const [tableRows, setTableRows] = useState([
    {
      jobNo: "",
      instrumentDescription: "",
      serialNo: "",
      parameter: "",
      ranges: "",
      accuracy: "",
    },
  ]);

  // Default empty row
  const emptyRow = {
    jobNo: "",
    instrumentDescription: "",
    serialNo: "",
    parameter: "",
    ranges: "",
    accuracy: "",
  };

  // Add a new row to the table
  const handleAddRow = () => {
    setTableRows([...tableRows, { ...emptyRow }]);
  };

  // Handle changes in table row fields
  const handleRowChange = (index, field, value) => {
    const newRows = [...tableRows];
    newRows[index][field] = value;
    setTableRows(newRows);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", { formData, tableRows });
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Header Section */}
        <div className="form-header-logo">
          <div className="logo">ED</div>
          <h1>ERROR DETECTOR</h1>
        </div>

        {/* Service Request Form Header */}
        <div className="service-request-header">
          <h2>SERVICE REQUEST FORM (SRF)</h2>
        </div>

        {/* Top Section with SRF and Dates */}
        <div className="form-top-section">
          <div className="form-group">
            <label>SRF No:</label>
            <input type="text" value={formData.srfNo} readOnly />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Probable Date of Completion:</label>
            <input type="date" value={formData.probableDate}  onChange={(e) => setFormData({ ...formData, probableDate: e.target.value })}/>
            <span className="note">(for office use only)</span>
          </div>
        </div>

        {/* Organization Details */}
        <div className="main-content">
          <div className="section-1">
            <h3>1. Details of Organization:</h3>
            <div className="org-details">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={formData.organization} readOnly />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea value={formData.address} readOnly />
              </div>
              <div className="contact-details">
                <div className="form-group">
                  <label>Contact Person Name:</label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPerson: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number:</label>
                  <input type="tel" value={formData.mobileNumber} readOnly />
                </div>
                <div className="form-group">
                  <label>Telephone Number:</label>
                  <input
                    type="tel"
                    value={formData.telephoneNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        telephoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email ID:</label>
                  <input
                    type="email"
                    value={formData.emailId}
                    onChange={(e) =>
                      setFormData({ ...formData, emailId: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Description Section */}
          <div className="section-2">
            <h3>2. Product Description:</h3>
            <div className="product-table">
              <table>
                <thead>
                  <tr>
                    <th>Job No.</th>
                    <th>Instrument Description</th>
                    <th>Serial No./ID No.</th>
                    <th>Parameter</th>
                    <th>Ranges</th>
                    <th>Accuracy</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, index) => (
                    <tr key={index}>
                      {Object.keys(emptyRow).map((key) => (
                        <td key={key}>
                          <input
                            type="text"
                            value={row[key]}
                            onChange={(e) =>
                              handleRowChange(index, key, e.target.value)
                            }
                            style={{ width: '160px', padding: '5px', fontSize: '12px' }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={handleAddRow}
                className="add-row-btn"
              >
                Add Row
              </button>
            </div>
          </div>

          {/* Decision Rules Section */}
          <div className="section-3">
            <h3>3. Decision Rules</h3>
            <div className="checkbox-group">
              <input type="checkbox" id="rule1" name="rule1" />
              <label htmlFor="rule1">No decision on conformative statement</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="rule2" name="rule2" />
              <label htmlFor="rule2">Simple conformative decision</label>
            </div>
          </div>

          {/* Footer Section */}
          <div className="form-footer">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ErrorDetectorForm;
