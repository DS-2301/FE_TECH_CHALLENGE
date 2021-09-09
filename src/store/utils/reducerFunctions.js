export const addItemToStore = (state, item) => {
  const items = { ...state.items };

  if (Object.keys(items).length > 0) {
    items[Math.max(...Object.keys(items).map(Number)) + 1] = item;
    console.warn(Math.max(...Object.keys(items).map(Number)));
  } else {
    items[0] = item;
  }
  const total = Object.values(items).reduce(
    (result, product) => result + product.MSRP,
    0
  );

  return {
    ...state,
    items,
    total,
  };
};

export const removeItemFromStore = (state, id) => {
  const items = { ...state.items };

  if (items[id]) {
    delete items[id];
  }
  const total = Object.values(items).reduce(
    (result, product) => result + product.MSRP,
    0
  );
  return {
    ...state,
    items,
    total,
  };
};
