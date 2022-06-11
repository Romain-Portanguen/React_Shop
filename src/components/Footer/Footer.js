/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import './footer.css';

function Footer() {
  const [inputValue, setInputValue] = useState('');

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">Vous souhaitez recevoir notre Greenletter :</div>
      <input
        className="lmj-footer-input"
        placeholder="Entrez votre E-mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
