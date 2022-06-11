/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-operators */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './cart.css';

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  );
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2 className="lmj-cart-title">Panier :</h2>
          <ul className="lmj-cart-list">
            {cart.map(({ name, price, amount }, index) => (
              <div className="lmj-cart-element" key={`${name}-${index}`}>
                <span className="lmj-cart-plant">{name}</span> {amount} X {price} € : {amount * price} €
              </div>
            ))}
          </ul>
          <h3 className="lmj-cart-subtitle">Total : {total} €</h3>
          <button onClick={() => updateCart([])} className="lmj-cart-delete-button">Vider le panier</button>
        </div>
      ) : (
        <div className="lmj-cart-noproduct">Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

Cart.propTypes = {

  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,

};

export default Cart;
