import {createSlice} from '@reduxjs/toolkit'
const initialStae = {
  toys: [],
};

const toySlice = (state = initialStae, action) => {
  switch (action) {
    case "ADD_TOY":
      return {
        ...state,
        toys: [...state.toys, action.toys],
      };
    case "REMOVE_TOY":
      return {
        ...state,
        toys: state.toys.filter((toy) => toy !== action.toy),
      };

    default:
      return state;
  }
};
export default toyReducer;
