import * as actionTypes from "../ActionTypes";
import { updateObject } from "../../utils/Utilities";

const initialState = {
  data: [],
};

const setAllPhotos = (state, action) => {
  return updateObject(state, action);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS_PHOTO:
      return setAllPhotos(state, action);
    default:
      return state;
  }
};

export default reducer;
