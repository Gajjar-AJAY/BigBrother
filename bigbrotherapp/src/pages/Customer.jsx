import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Customer = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    customerName: "",
    mobile: "",
    email: "",
    gst: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // live error remove
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // ✅ Validate required fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required";

    if (!formData.customerName.trim())
      newErrors.customerName = "Customer Name is required";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields.");
      return;
    }

    toast.success("Customer Added Successfully!");
    alert("Customer Added: " + JSON.stringify(formData, null, 2));
    // ✅ Yaha tu backend/API call kar sakta hai
  };

  return (
    <div className="content-section active">
      <h2 className="page-title modern-title">Add Customer</h2>
      <div>
        <Toaster />
      </div>
      <div className="form-card">
        <form className="modern-form" onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="form-group">
            <label htmlFor="companyName">
              Company Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className={errors.companyName ? "error-input" : ""}
            />
            {errors.companyName && (
              <p className="error-text">{errors.companyName}</p>
            )}
          </div>

          {/* Customer Name */}
          <div className="form-group">
            <label htmlFor="customerName">
              Customer Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Enter customer name"
              className={errors.customerName ? "error-input" : ""}
            />
            {errors.customerName && (
              <p className="error-text">{errors.customerName}</p>
            )}
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label htmlFor="mobile">
              Mobile <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile"
              maxLength="10"
              className={errors.mobile ? "error-input" : ""}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
            {errors.mobile && <p className="error-text">{errors.mobile}</p>}
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
            />
          </div>

          {/* GST */}
          <div className="form-group">
            <label htmlFor="gst">GST Number</label>
            <input
              type="text"
              id="gst"
              name="gst"
              maxLength="15"
              value={formData.gst}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gst: e.target.value.toUpperCase(), // 👈 yeh automatic uppercase karega
                })
              }
              placeholder="Enter GST number"
            />
          </div>

          {/* Address */}
          <div className="form-group full-width">
            <label htmlFor="address">
              Address <span className="required">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows="3"
              className={errors.address ? "error-input" : ""}
            ></textarea>
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>

          {/* Submit & Cancel Buttons */}
          <div className="form-actions">
            <button type="submit" className="btn-modern">
              <Plus size={16} /> Add Customer
            </button>
            <Link
              to="/CustomerList"
              className="btn-modern btn-secondary cancelBtn"
            >
              <X size={18} className="cancelIcon" /> Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
