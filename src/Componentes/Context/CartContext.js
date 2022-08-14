import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
     const [cart, setCart] = useState([]);

     const addToCart = (product) => {
      const isInCart = cart.find(
         (productInCart) => productInCart.id === product.id
       );
       if (isInCart) {
         const newArray = cart.map((productInCart) => {
           if (productInCart.id === product.id) {
             return {
               ...productInCart,
               contador: productInCart.contador + product.contador,
             };
           } else {
             return productInCart;
           }
         });
         setCart(newArray);
       } else {
         setCart([...cart, product]);
       }
     };

     const clear = () => {setCart([])};

     const removeItem = (id) => {
      const newCart = cart.filter((product) => product.id !== id)
      setCart(newCart);
     }



     return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}

        </CartContext.Provider>
     );
};

export default CartProvider