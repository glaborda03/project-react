import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = ({children}) => {
     const [cart, setCart] = useState([]);

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
           } else {
             return productInCart;
           }
         });
         setCart(newArray);
       } else {
         setCart([...cart, prod]);
       }
     };

     const clear = () => {setCart([])};

     const removeItem = (Id) => {
      const newCart = cart.filter((prod) => prod.Id !== Id)
      setCart(newCart);
     };



     return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}

        </CartContext.Provider>
     );
};

export default CartProvider