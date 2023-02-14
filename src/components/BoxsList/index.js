import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, unselectItem, clearSelectedItems } from '../../actions/actions';
import './boxsList.css';

function BoxsList() {
  const items = useSelector(state => state.user.items);
  const selectedItems = useSelector(state => state.user.selectedItems);
  const [ratio, setRatio] = useState(null);
  const [infosItem, setInfosItem] = useState(null);
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

  const toggleInfosItem = id => {
    setInfosItem(id === infosItem ? null : id);
  };

  const infosItemOff = () =>{
    setInfosItem(null)
  };

  const handleClearClick = () => {
    dispatch(clearSelectedItems());
  };

  const convertNumber = cm => {
    let result;

    if (cm >= 100000) {
      result = (cm / 100000).toFixed(1) + " km";
    } else if (cm >= 1000) {
      result = (cm / 100).toFixed(0) + " m";
    } else if (cm >= 1) {
      result = cm.toFixed(0) + " cm";
    } else {
      if (cm < 0.1) {
        result = (cm * 10).toFixed(2) + " mm";
      } else {
        result = (cm * 10).toFixed(0) + " mm";
      }
    }
  
    return result;
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
                <img src={selectedItem.image} className="selected-items-image" alt={selectedItem.image}/>
                <h2 className="selected-items-title">{selectedItem.titre}</h2>
                <button 
                  className="item-infos"
                  onClick={() => toggleInfosItem(selectedItem.id)}
                  // onBlur={infosItemOff}
                >
                  <div className={infosItem === selectedItem.id ? "info-draw--on" : "info-draw"}/>
                  <div className={infosItem === selectedItem.id ? "info-draw-dot--on" : "info-draw-dot"}/>
                </button>
                <div className={infosItem === selectedItem.id ? "infos-on" : "infos-off"}><p>{selectedItem.titre}   :<br/>
                {convertNumber(selectedItem.taille)}</p></div>
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
            Il faut {ratio} {selectedItems.find(i => i.taille === Math.min(...sizes)).titre.toLowerCase()} pour atteindre la taille {selectedItems.find(i => i.taille === Math.max(...sizes)).the} {selectedItems.find(i => i.taille === Math.max(...sizes)).titre.toLowerCase()}.
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
                  <p>{item.titre}</p> 
                </div>
              ))}
            </div>
        </div>
     
      <button onClick={handleClearClick} className="clear-container">Effacer</button>
    </div>
  );
}

export default BoxsList;
