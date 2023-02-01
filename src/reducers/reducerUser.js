import {
  SELECT_ITEM, 
  UNSELECT_ITEM, 
  CLEAR_SELECTED_ITEMS
} from '../actions/actions';

const initialState = {
  items: [
    { id: 1, the: "de la", titre: "Tour Eiffel", taille: 30000, image: require("../assets/images/eiffel.png") },
    { id: 2, the: "de l'", titre: "Homme", taille: 175 },
    { id: 3, the: "de la",titre: "Lune", taille: 173740000, image: require("../assets/images/moon.png") },
    { id: 4, the: "de l'", titre: "Iphone 14", taille: 14, image: require("../assets/images/iphone.png") },
    { id: 5, the: "d'une",titre: "Fourmi", taille: 0.5, image: require("../assets/images/fourmi.png") },
    { id: 6, the: "de la",titre: "Baleine bleue", taille: 2400, image: require("../assets/images/baleine.png") },
    { id: 8, the: "de",titre: "L'Everest", taille: 884800, image: require("../assets/images/everest.png") },
    { id: 9, the: "d'une",titre: "Girafe", taille: 420, image: require("../assets/images/girafe.png") },
    { id: 7, the: "du",titre: "Burj Khalifa", taille: 82800, image: require("../assets/images/burj.png") },
    { id: 10, the: "d'une",titre: "Cellule", taille: 0.005, image: require("../assets/images/cellule.png") },
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
