export const SELECT_ITEM = 'SELECT_ITEM';
export const UNSELECT_ITEM = 'UNSELECT_ITEM';
export const CLEAR_SELECTED_ITEMS = 'CLEAR_SELECTED_ITEMS';

export const selectItem = item => ({
  type: SELECT_ITEM,
  item,
});

export const unselectItem = item => ({
  type: UNSELECT_ITEM,
  item,
});

export const clearSelectedItems = () => {
  return {
    type: CLEAR_SELECTED_ITEMS,
  };
};
