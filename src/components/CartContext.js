  import React,{useState, useContext} from 'react';
  export const CartContext = React.createContext([]);
  export const useCartContext = () => useContext(CartContext);

  const CartProvider = ({children}) => {
  //Estado de carrito
  const [cart, setCart] = useState([]);
  //funcion agregar producto al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(productos => {
        return productos.id === item.id ? { ...productos, quantity: productos.quantity + quantity } : productos;
      }));
    } else {
      const newItem = { ...item, quantity: quantity || 1 }; 
      setCart([...cart, newItem]);
    }
  };

  //funciones del contexto entre item y cart
  const finalPrice = () =>{
    return cart.reduce((a,b)=> a + b.quantity * b.price,0);
  };
  const finalProducts = () => {
    return cart.reduce((total, productos) => total + productos.quantity, 0);
  };
  const removeProductCart = (id) => setCart(cart.filter(productos => productos.id !== id));
  const emptyCart = () => setCart([]);
  const isInCart  = (id) => cart.find(productos => productos.id === id) ? true : false;
  const removeItem = (id) => setCart(cart.filter(productos => productos.id !== id));

    return (
      <CartContext.Provider value={{
        emptyCart,
        isInCart,
        removeItem,
        addItem,
        removeProductCart,
        finalProducts,
        finalPrice,
        cart
      }}>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartProvider;