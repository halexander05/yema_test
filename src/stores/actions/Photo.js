import * as actionTypes from "../ActionTypes";
import axios from "axios";

const setAllPhotos = (data = null) => {
  return {
    type: actionTypes.FETCH_SUCCESS_PHOTO,
    data: data,
  };
};

export const fetchAllPhotos = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.unsplash.com/photos/?page=5&per_page=30&client_id=q9n-RAcwBFbIb9-6Dfjb3ZzJRjBie7Sx-JGCMHlYY2Q"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setAllPhotos(response.data));
      })
      .catch(dispatch(setAllPhotos()));
  };
};
