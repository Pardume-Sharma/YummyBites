import { createContext, useEffect, useState } from 'react';
import { food_list } from '../../assets/assets.js';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };
    // const [food_list, setFoodList] = useState([]);


    const removeFromCart = (itemId) => {
        if (cartItems[itemId] && cartItems[itemId] > 1) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        } else {
            setCartItems((prev) => {
                const updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            });
        }
    };

    const getTotalAmount = () => { 
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const clearCart = () => {
        setCartItems({});
    };

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
