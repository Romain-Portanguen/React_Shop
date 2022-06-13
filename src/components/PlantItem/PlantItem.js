/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './plantItem.scss';

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({
  cover, name,
}) {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <a className="lmj-plant-item-describe" href="#">{name}</a>
    </li>
  );
}

export default PlantItem;
