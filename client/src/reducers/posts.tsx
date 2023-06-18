import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH_BY_SEARCH,
} from "../constants/actionType";
const reducer = (posts = [], action: any) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
    case LIKE:
      return posts.map((post: any) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post: any) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
