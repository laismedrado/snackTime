import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_URL } from "../constants/URL"
import GlobalStateContext from "./GlobalStateContext"
import { getToken } from "../helpers/localStorage";

export const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState({})
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState({
        products: [],
        restaurant: null,
      });  

      const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
          setCartItems(
            cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x 
            
            )
          );
        }else {
          setCartItems([...cartItems, {...product, qty: 1}]);
        }
      }


      const addToCart = (restaurant, product, quantity = 1) => {
        const newProduct = { ...product, quantity };
    
        setCart((cart) => ({
          ...cart,
          restaurant,
          products:
            restaurant.id === cart.restaurant?.id
              ? [...cart.products, newProduct]
              : [newProduct],
        }));
      };
    
    const getRestaurants = () => {
        const auth = getToken()
        axios
            .get(`${base_URL}restaurants`, {
                headers: {
                    auth: auth
                }
            })
            .then(async (res) => {
                const allRestaurants = res.data.restaurants
                
                const promise = allRestaurants.map((restaurant) => {
                    return axios.get(`${base_URL}restaurants/${restaurant.id}`, {
                        headers: {
                            auth: auth
                            }
                    })
                })
                
                const getPromise = await Promise.all(promise)
                const filterListRestaurant = getPromise.map((item) => item.data.restaurant)
                
                setRestaurantes(filterListRestaurant)
            })
            .catch((err) => alert("Algo deu errado, tente novamente!"))
    }

    useEffect(() => {
        if (!restaurantes.length) {
            getRestaurants()
        }
    }, [restaurantes])

    const states = {
        restaurantes,
        restaurantDetail
    }

    const setters = {
        setRestaurantes,
        setRestaurantDetail
    }
// redux
    return (
        <GlobalStateContext.Provider value={{ states, setters, cart, setCart, cartItems, setCartItems, onAdd }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
