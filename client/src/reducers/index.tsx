import { combineReducers } from "redux";

import posts from "./posts";

const rootReducer: any = combineReducers({
  posts: posts,
});

export default rootReducer;
// export default combineReducers({
//   posts;
// });
