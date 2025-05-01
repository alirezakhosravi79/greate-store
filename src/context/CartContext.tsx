import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ICartContext {
  children: React.ReactNode;
}

//4/
interface IValueContext {
  cartItems: ICartItem[],
  addToCart: (id: number) => void,
  handleDecrese: (id: number) => void,
  getProductQty: (id: number) => number,
  handleRemove: (id: number) => void,
  cartQty: number,
  isLogin: boolean,
  handleLogin: () => void,
  handleLogOut: () => void
}

//5/ type hay usestate cart
interface ICartItem {
    id: number,
    qty: number,
}

//1/
// export const CartContext = createContext<IValueContext>({
//     cartItems: []
// })

export const CartContext = createContext({} as IValueContext);

//6/custom hook for cartcontext
export const useCartContext = () => {
    return useContext(CartContext);
}


//2/
export function CartContextProvider({ children }: ICartContext) {
  //3 state for Cart initialvalue ye array khali
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>('cartItems', []);//7

  //7-1 function add to cart
  const addToCart = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      //8-age mahsol dakhel sabad kharid nabashe else= age idmahsol find shode dakhel sabad bashe
      //qty (tedad id mahsol) 1 ziad mikone
      if(selectedItem == null) {
        return [...currentItems, {id: id, qty: 1}];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {...item, qty: item.qty + 1}
          } else{
            return item;
          }
        })
      }
    })
  }

  //8-1 decrease
  const handleDecrese = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      //8-age mahsol dakhel sabad kharid nabashe else= age idmahsol find shode dakhel sabad bashe
      //qty (tedad id mahsol) 1 ziad mikone
      if(selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {...item, qty: item.qty - 1}
          } else{
            return item;
          }
        })
      }
    })

  }

  //gereftan tedad yek mahsol
  const getProductQty = (id: number) => {
   return cartItems.find((item) => item.id == id)?.qty || 0
  }

  //remove product cart
  const handleRemove = (id: number) => {
    setCartItems(currentItems => currentItems.filter((item) => item.id != id))
  }

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty , 0);

  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  }

  const handleLogOut = () => {
    // console.log('Logout called'); // برای تست
    setIsLogin(false);  
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, handleDecrese, getProductQty,
     handleRemove, cartQty, isLogin, handleLogin, handleLogOut }}>
      {children}
    </CartContext.Provider>
  );
}
