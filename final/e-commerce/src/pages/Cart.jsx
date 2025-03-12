import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Calculate total price considering quantity
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle Buy Now
  const handleBuyNow = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some items first.");
      return;
    }

    alert(`Total amount: $${totalPrice}\nProceeding to checkout...`);
    setCart([]); // Clear cart after purchase (mock checkout)
  };

  const updateQuantity = (productId, increase) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: increase ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  // Increase product quantity
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove product completely from cart
  const removeFromCart = (productId, quantity) => {
    if (quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId)); // Removes the entire product from the cart
    } else {
      updateQuantity(productId, false); // Decreases the quantity
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name} </h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-actions">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <p>({item.quantity})</p>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                </div>
                <button onClick={() => removeFromCart(item.id, item.quantity)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button className="buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
