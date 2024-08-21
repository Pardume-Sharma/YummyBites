import { createContext, useEffect, useState } from 'react';
import { food_list } from '../../assets/assets.js';
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : {};
    });
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");

    const fetchFoodList = async ()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
        if(token)
        {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };
    const [food_list, setFoodList] = useState([]);

    useEffect(() => {
    async function loadData(){
        await fetchFoodList()
    }
    loadData();
      }, [])
    
    const removeFromCart = async (itemId) => {
        setCartItems(async (prev) => {
            if(token)
            {
                await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            }
            if (prev[itemId] >= 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } else {
                const updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            }
        });
    };

    const removeItem = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    };

    const getTotalAmount = () => {
        return Object.entries(cartItems).reduce((total, [id, quantity]) => {
            const item = food_list.find((item) => item._id === id);
            return total + (item ? item.price * quantity : 0);
        }, 0);
    };

    const loadCartData = async (token)=>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData)
    }
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        removeItem,
        url, 
        getTotalAmount,
        token,
        setToken,
        loadCartData
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
