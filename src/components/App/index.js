import { useState } from 'react';

import Banner from '../Banner/Banner';
import logo from '../../assets/logo.png';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import ShoppingList from '../ShoppingList/ShoppingList';

import './styles.scss';
import '../../styles/index.scss';

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
