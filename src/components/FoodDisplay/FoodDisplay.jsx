import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-menu">
            <div className="food-display" id="food-display">
                <h2 className="food-dishes-head">Top Dishes near you</h2>
                <div className="food-list">
                    {food_list.map((item) => {
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem
                                    key={item._id}  // Use _id for unique keys instead of index
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}  // Ensure image URLs are valid
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>

            <div className="ads">
                {/* Advertisement section */}
            </div>
        </div>
    );
};

export default FoodDisplay;
