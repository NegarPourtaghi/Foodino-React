const AddItems = (food) => {
  return {
    type: "ADD_ITEM",
    payload: food,
  };
};

const RemoveItems = (food) => {
  return {
    type: "REMOVE_ITEM",
    payload: food,
  };
};

const Increase = (food) => {
  return {
    type: "INCREASE",
    payload: food,
  };
};

const Decrease = (food) => {
  return {
    type: "DECREASE",
    payload: food,
  };
};

const Liked = (food) => {
  return {
    type: "LIKED",
    payload: food,
  };
};
const Disliked = (food) => {
  return {
    type: "DISLIKED",
    payload: food,
  };
};
const Clear = () => {
  return { type: "CLEAR" };
};

const Chechkout = () => {
  return { type: "CHECKOUT" };
};

export {
  AddItems,
  RemoveItems,
  Increase,
  Decrease,
  Liked,
  Disliked,
  Chechkout,
  Clear,
};
