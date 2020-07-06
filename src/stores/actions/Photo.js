import * as actionTypes from "../ActionTypes";
import axios from "axios";

const setAllPhotos = (data = null) => {
  return {
    type: actionTypes.FETCH_SUCCESS_PHOTO,
    data: data,
  };
};

export const fetchAllPhotos = (page = 1, perPage = 12) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.unsplash.com/photos/?page=${page}&per_page=${perPage}&client_id=q9n-RAcwBFbIb9-6Dfjb3ZzJRjBie7Sx-JGCMHlYY2Q`
      )
      .then((response) => {
        dispatch(setAllPhotos(response.data));
      })
      .catch(dispatch(setAllPhotos()));
  };
};
