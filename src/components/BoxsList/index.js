import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, unselectItem, clearSelectedItems } from '../../actions/actions';
import './boxsList.css';

function BoxsList() {
  const items = useSelector(state => state.user.items);
  const selectedItems = useSelector(state => state.user.selectedItems);
  const [ratio, setRatio] = useState(null);
  const dispatch = useDispatch();

  const handleClick = item => {
    if (selectedItems.includes(item)) {
      dispatch(unselectItem(item));
    } else {
      if (selectedItems.length < 2) {
        dispatch(selectItem(item));
      } else {
        alert('Vous ne pouvez sélectionner que 2 éléments.');
      }
    }
  };

  const handleClearClick = () => {
    dispatch(clearSelectedItems());
  };



  useEffect(() => {
    if (selectedItems.length === 2) {
      const sizes = selectedItems.map(i => i.taille);
      const bigger = Math.max(...sizes);
      const smaller = Math.min(...sizes);
      const ratio = Math.ceil(bigger / smaller);
      const formattedRatio = ratio.toLocaleString('fr-FR', {minimumFractionDigits: 0, useGrouping: true});
      setRatio(formattedRatio);
    }
  }, [selectedItems]);
  const sizes = selectedItems.map(i => i.taille);
  return (
    <div className="item-list-container">
      <div className="boxs">
        <div className="selected-items">
          {selectedItems.map(item => (
            <button key={item.id} className="selected">
              {item.titre}
            </button>
          ))}
        </div>
      </div>
      {
        selectedItems.length === 2 ? (
          <div>
            Il faut {ratio} {selectedItems.find(i => i.taille === Math.min(...sizes)).titre} pour atteindre la taille de {selectedItems.find(i => i.taille === Math.max(...sizes)).titre}
          </div>
        ) : null
      }
      <div className="item-list">
        {items.map(item => (
          <button
            key={item.id}
            className={`item-button ${selectedItems.includes(item) ? 'selected' : ''}`}
            onClick={() => handleClick(item)}
          >
            {item.titre}
          </button>
        ))}
      </div>
      <button onClick={handleClearClick} className="clear-container">Effacer</button>
    </div>
  );
}

export default BoxsList;
