import {
  SELECT_ITEM, 
  UNSELECT_ITEM, 
  CLEAR_SELECTED_ITEMS
} from '../actions/actions';

const initialState = {
  items: [
    { id: 1, titre: "tour Eiffel", taille: 30000 },
    { id: 2, titre: "Homme", taille: 175 },
    { id: 3, titre: "Lune", taille: 173740000 },
    { id: 4, titre: "Iphone 14", taille: 14 },
    { id: 5, titre: "Fourmi", taille: 0.5 },
    { id: 6, titre: "Baleine bleue", taille: 2400 },
    { id: 7, titre: "Burj Khalifa", taille: 82800 },
    { id: 8, titre: "L'Everest", taille: 884800 },
    { id: 9, titre: "Girafe", taille: 420 },
    { id: 10, titre: "Cellule", taille: 0.005 },
  ],
  selectedItems: [],
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, action.item],
      };
    case UNSELECT_ITEM:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(i => i !== action.item),
      };
      case CLEAR_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: []
      };
    default:
      return state;
  }
};

export default reducerUser;
