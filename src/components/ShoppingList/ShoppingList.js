/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { plantList } from '../../data/plantList';
import PlantItem from '../PlantItem/PlantItem';
import './shoppingList.css';

function ShoppingList({ cart, updateCart }) {
  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name,
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    }
    else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">

      <ul className="lmj-plant-list">
        {plantList.map(({
          id, cover, name, water, light, price,
        }) => (
          <div key={id}>
            <PlantItem
              cover={cover}
              name={name}
              water={water}
              light={light}
              price={price}
            />
            <button className="lmj-shopping-list-button" onClick={() => addToCart(name, price)} type="button">Ajouter</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

ShoppingList.propTypes = {

  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,

};

export default ShoppingList;
