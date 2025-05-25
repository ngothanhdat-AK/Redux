import counterReducer from "./counter"
import { combineReducers } from "redux";
import toDoReducer from "./toDo";


const allReducers = combineReducers({
    // user: require('./userReducer').default,
    // posts: require('./postsReducer').default,
    // comments: require('./commentsReducer').default,
    // notifications: require('./notificationsReducer').default,
    // settings: require('./settingsReducer').default,
    count: counterReducer,
    todo: toDoReducer,
})

export default allReducers;
//file này định nghĩa và xuất 1 reducer tổng hợp combine reducers
//Mục đích của việc kết hợp nhiều reducers lại với nhau là để quản lý các phần khác nhau của state trong ứng dụng một cách hiệu quả và có tổ chức hơn.