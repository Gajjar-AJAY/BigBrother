import React, { useState } from "react";

const Customer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    customerName: "",
    mobile: "",
    email: "",
    gst: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Customer Added: " + JSON.stringify(formData, null, 2));
    // ✅ Yaha tu backend/API call kar sakta hai
  };

  return (
    <div className="content-section active">
      <h2 className="page-title">Add Customer</h2>

      <div className="form-card">
        <form className="modern-form" onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Customer Name */}
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Enter customer name"
              required
            />
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              required
            />
          </div>

          {/* GST */}
          <div className="form-group">
            <label htmlFor="gst">GST Number</label>
            <input
              type="text"
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleChange}
              placeholder="Enter GST number"
            />
          </div>

          {/* Address */}
          <div className="form-group full-width">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="btn-modern">
              ➕ Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
