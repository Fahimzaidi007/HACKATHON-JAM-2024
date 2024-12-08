import React from 'react';

// Define types for props if needed
interface AddToCartButtonProps {
  productId: string;
  onAddToCart: (productId: string) => void;
  disabled?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId, onAddToCart, disabled = false }) => {
  
  const handleClick = () => {
    onAddToCart(productId);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`add-to-cart-btn ${disabled ? 'disabled' : ''}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;