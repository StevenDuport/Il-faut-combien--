import {
  SELECT_ITEM, 
  UNSELECT_ITEM, 
  CLEAR_SELECTED_ITEMS
} from '../actions/actions';

const initialState = {
  items: [
    { id: 1, titre: "Tour eiffel", taille: 30000 },
    { id: 2, titre: "Homme", taille: 175 },
    { id: 3, titre: "Lune", taille: 173740000 },
    { id: 4, titre: "Iphone 14", taille: 14 },
    { id: 5, titre: "Tour eiffel", taille: 30000 },
    { id: 6, titre: "Homme", taille: 175 },
    { id: 7, titre: "Lune", taille: 173740000 },
    { id: 8, titre: "Iphone 14", taille: 14 },
    { id: 9, titre: "Tour eiffel", taille: 30000 },
    { id: 10, titre: "Homme", taille: 175 },
    { id: 11, titre: "Lune", taille: 173740000 },
    { id: 12, titre: "Iphone 14", taille: 14 },
    { id: 13, titre: "Tour eiffel", taille: 30000 },
    { id: 14, titre: "Homme", taille: 175 },
    { id: 15, titre: "Lune", taille: 173740000 },
    { id: 16, titre: "Iphone 14", taille: 14 }
    
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
