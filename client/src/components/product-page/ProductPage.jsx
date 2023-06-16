import React from "react";

const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src="product-image-url" alt="Product" />
      </div>
      <div className="product-details">
        <h1 className="product-title text-4xl font-bold mb-4">Product Title</h1>
        <p className="product-description text-lg text-gray-700 mb-4">
          Product Description
        </p>
        <div className="product-price text-2xl text-green-500 mb-4">$19.99</div>
        <button className="add-to-cart bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
        {/* Include other product details here */}
      </div>
    </div>
  );
};

export default ProductPage;
