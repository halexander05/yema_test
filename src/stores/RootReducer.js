import { combineReducers } from "redux";

import Photo from "./reducers/Photo";

const rootReducer = combineReducers({
  photos: Photo,
});

export default rootReducer;
