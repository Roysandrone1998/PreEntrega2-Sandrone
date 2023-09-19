import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex(
      (product) => product.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((product) => product.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, calculateTotal, total }}>
      {children}
    </CartContext.Provider>
  );
};