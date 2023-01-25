import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, unselectItem, clearSelectedItems } from '../../actions/actions';
import './boxsList.css';

function BoxsList() {
  const items = useSelector(state => state.user.items);
  const selectedItems = useSelector(state => state.user.selectedItems);
  const [ratio, setRatio] = useState(null);
  const sizes = selectedItems.map(i => i.taille);
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


  return (
    <div className="container">
      <div className="boxs">
      {Array(2).fill(0).map((_, index) => {
        const selectedItem = selectedItems[index];
        return (
          <div key={index} className="selected-items">
            {selectedItem ? 
              (<>
                <img src={selectedItem.image} className="selected-items-image"/>
                <p className="selected-items-title">{selectedItem.titre}</p>
              </>) 
              : null
            }
          </div>
        );
      })}
      </div>
      {
        selectedItems.length === 2 ? (
          <p className="item-result">
            Il faut {ratio} {selectedItems.find(i => i.taille === Math.min(...sizes)).titre} pour atteindre la taille de {selectedItems.find(i => i.taille === Math.max(...sizes)).titre}
          </p>
        ) : <div className='item-result'/>
      }
        <div className="item-list">
          <div className="item-list-container">
              {items.map(item => (
                <div key={item.id} className='test-item'>
                  <button
                    className={`item-button ${selectedItems.includes(item) ? 'selected' : ''}`}
                    onClick={() => handleClick(item)}
                  >
                    <img src={item.image} className="item-image"/>
                      {selectedItems.includes(item) ? <div className='counter'>{selectedItems.findIndex(i => i.id === item.id) + 1 }</div> : null}
                  </button>
                  <p className="item-p">{item.titre}</p> 
                </div>
              ))}
            </div>
        </div>
     
      <button onClick={handleClearClick} className="clear-container">Effacer</button>
    </div>
  );
}

export default BoxsList;
