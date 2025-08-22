import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Product = () => {
  const [formData, setFormData] = useState({
    Product_Name: "",
    Product_POColor: "",
    Product_POFinish: "",
    Product_ProductImage: null,
    Product_Description: "",
    Product_GST: "",
    Product_MRP: "",
    Product_HSNCode: "",
    Product_Stock: "0", // 👈 default 0
  });

  const [errors, setErrors] = useState({});
  const [collections, setCollections] = useState([
    {
      id: Date.now(),
      name: "",
      height: "",
      width: "",
      length: "",
      weight: "",
    },
  ]);

  // handle input change
  const handleLineItemChange = (id, field, value) => {
    setCollections((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // add new product card
  const handleAdd = () => {
    setCollections((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: "",
        height: "",
        width: "",
        length: "",
        weight: "",
      },
    ]);
  };

  // delete product card
  const handleDelete = (id) => {
    if (collections.length > 1) {
      setCollections((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Handle Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let newValue = value;

    if (type === "file") {
      newValue = files[0];
    }

    // ✅ Only Numbers for GST, MRP, Stock
    if (["Product_GST", "Product_MRP", "Product_Stock"].includes(name)) {
      newValue = newValue.replace(/[^0-9]/g, "");
    }

    setFormData({ ...formData, [name]: newValue });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate
  const validateForm = () => {
    let newErrors = {};

    if (!formData.Product_Name.trim())
      newErrors.Product_Name = "Product Name is required";

    if (!formData.Product_POColor.trim())
      newErrors.Product_POColor = "PO Color is required";

    if (!formData.Product_POFinish.trim())
      newErrors.Product_POFinish = "PO Finish is required";

    if (!formData.Product_GST.trim()) newErrors.Product_GST = "GST is required";

    if (!formData.Product_MRP.trim()) newErrors.Product_MRP = "MRP is required";

    if (!formData.Product_Stock.trim())
      newErrors.Product_Stock = "Stock is required";

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields.");
      return;
    }

    toast.success("Product Added Successfully!");
    alert("Product Added: " + JSON.stringify(formData, null, 2));
    // ✅ Backend/API call kar sakta hai
  };

  return (
    <div className="content-section active">
      <h2 className="page-title modern-title">Add Product</h2>
      <div>
        <Toaster />
      </div>
      <div className="form-card">
        <form className="modern-form">
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="Product_Name">
              Product Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_Name"
              name="Product_Name"
              value={formData.Product_Name}
              onChange={handleChange}
              placeholder="Enter product name"
              className={errors.Product_Name ? "error-input" : ""}
            />
            {errors.Product_Name && (
              <p className="error-text">{errors.Product_Name}</p>
            )}
          </div>

          {/* PO Color */}
          <div className="form-group">
            <label htmlFor="Product_POColor">
              PO Color <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_POColor"
              name="Product_POColor"
              value={formData.Product_POColor}
              onChange={handleChange}
              placeholder="Enter PO color"
              className={errors.Product_POColor ? "error-input" : ""}
            />
            {errors.Product_POColor && (
              <p className="error-text">{errors.Product_POColor}</p>
            )}
          </div>

          {/* PO Finish */}
          <div className="form-group">
            <label htmlFor="Product_POFinish">
              PO Finish <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_POFinish"
              name="Product_POFinish"
              value={formData.Product_POFinish}
              onChange={handleChange}
              placeholder="Enter PO finish"
              className={errors.Product_POFinish ? "error-input" : ""}
            />
            {errors.Product_POFinish && (
              <p className="error-text">{errors.Product_POFinish}</p>
            )}
          </div>

          {/* Product Image */}
          <div className="form-group">
            <label htmlFor="Product_ProductImage">Product Image</label>
            <input
              type="file"
              id="Product_ProductImage"
              name="Product_ProductImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="form-group full-width">
            <label htmlFor="Product_Description">Description</label>
            <textarea
              id="Product_Description"
              name="Product_Description"
              value={formData.Product_Description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="3"
            ></textarea>
          </div>

          {/* GST */}
          <div className="form-group">
            <label htmlFor="Product_GST">
              GST <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_GST"
              name="Product_GST"
              value={formData.Product_GST}
              onChange={handleChange}
              maxLength={2}
              placeholder="Enter GST"
              className={errors.Product_GST ? "error-input" : ""}
            />
            {errors.Product_GST && (
              <p className="error-text">{errors.Product_GST}</p>
            )}
          </div>

          {/* MRP */}
          <div className="form-group">
            <label htmlFor="Product_MRP">
              MRP <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_MRP"
              name="Product_MRP"
              value={formData.Product_MRP}
              onChange={handleChange}
              placeholder="Enter MRP"
              className={errors.Product_MRP ? "error-input" : ""}
            />
            {errors.Product_MRP && (
              <p className="error-text">{errors.Product_MRP}</p>
            )}
          </div>

          {/* HSN Code */}
          <div className="form-group">
            <label htmlFor="Product_HSNCode">HSN Code</label>
            <input
              type="text"
              id="Product_HSNCode"
              name="Product_HSNCode"
              value={formData.Product_HSNCode}
              onChange={handleChange}
              placeholder="Enter HSN code"
            />
          </div>

          {/* Stock */}
          <div className="form-group">
            <label htmlFor="Product_Stock">
              Stock <span className="required">*</span>
            </label>
            <input
              type="text"
              id="Product_Stock"
              name="Product_Stock"
              value={formData.Product_Stock}
              onChange={handleChange}
              placeholder="Enter stock quantity"
              className={errors.Product_Stock ? "error-input" : ""}
            />
            {errors.Product_Stock && (
              <p className="error-text">{errors.Product_Stock}</p>
            )}
          </div>
        </form>

        {/* Product Collection */}
        <div className="collection-section">
          <h3 className="section-title">Product Collection</h3>
          <div className="collection-grid">
            {collections.map((product, index) => (
              <div key={product.id} className="product-card">
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      handleLineItemChange(product.id, "name", e.target.value)
                    }
                    placeholder="Enter product name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Height</label>
                    <input
                      type="text"
                      value={product.height}
                      onChange={(e) =>
                        handleLineItemChange(
                          product.id,
                          "height",
                          e.target.value
                        )
                      }
                      placeholder="Height"
                    />
                  </div>

                  <div className="form-group">
                    <label>Width</label>
                    <input
                      type="text"
                      value={product.width}
                      onChange={(e) =>
                        handleLineItemChange(
                          product.id,
                          "width",
                          e.target.value
                        )
                      }
                      placeholder="Width"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Length</label>
                    <input
                      type="text"
                      value={product.length}
                      onChange={(e) =>
                        handleLineItemChange(
                          product.id,
                          "length",
                          e.target.value
                        )
                      }
                      placeholder="Length"
                    />
                  </div>

                  <div className="form-group">
                    <label>Weight</label>
                    <input
                      type="text"
                      value={product.weight}
                      onChange={(e) =>
                        handleLineItemChange(
                          product.id,
                          "weight",
                          e.target.value
                        )
                      }
                      placeholder="Weight"
                    />
                  </div>
                </div>

                <div className="card-actions">
                  <div className="product-header">
                    <span className="product-index">{index + 1}</span>
                  </div>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className="btn-add"
                      onClick={handleAdd}
                      title="Add"
                    >
                      <Plus size={18} />
                    </button>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={() => handleDelete(product.id)}
                      title="Delete"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit & Cancel */}
        <div className="form-actions">
          <button type="submit" className="btn-modern" onClick={handleSubmit}>
            <Plus size={16} /> Add Product
          </button>
          <Link
            to="/ProductList"
            className="btn-modern btn-secondary cancelBtn"
          >
            <X size={18} className="cancelIcon" /> Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
