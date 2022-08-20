import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProd, setTotalProd] = useState(0);
  const [totalCompra, setTotalCompra] = useState(0);

  const addToCart = (prod) => {
    const isInCart = cart.find(
      (productInCart) => productInCart.Id === prod.Id
    );
    
    if (isInCart) {
      const newArray = cart.map((productInCart) => {
        if (productInCart.Id === prod.Id) {
          return {
            ...productInCart,
            contador: productInCart.contador + prod.contador,
          };
        }
        else {
          return productInCart;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, prod]);
    }
    
      setTotalProd(totalProd + prod.contador);
      setTotalCompra(totalCompra + parseInt(prod.contador)*parseFloat(prod.precio));
  };

  const clear = () => { 
    setCart([]) 
    setTotalCompra(0);
    setTotalProd(0);
  };

  const removeItem = (id) => {
    
    const newCart = cart.filter((prod) => prod.Id !== id);
    setCart(newCart);

    const p = cart.find((prod) => prod.Id === id);
    setTotalProd(totalProd - p.contador);

    setTotalCompra(
      totalCompra - parseInt(p.contador) * parseFloat(p.precio));
  };



  return (
    <CartContext.Provider value={{ cart, totalProd, totalCompra, addToCart, clear, removeItem  }}>
      {children}

    </CartContext.Provider>
  );
};

export default CartProvider