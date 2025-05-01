//---------- 1  --------//

import { useEffect, useState } from "react";

//gharare naghash ye state ro bazi kone k dakhel localstorage ham zakhire mishe

export function useLocalStorage<T>(key:string, initialValue: T)  {
    const [value, setValue] = useState<T>(() => {
         let localCart = localStorage.getItem('cartItems');

         if(localCart != null) return JSON.parse(localCart);
         else {
            return initialValue;
         }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as [typeof value, typeof setValue ]
}