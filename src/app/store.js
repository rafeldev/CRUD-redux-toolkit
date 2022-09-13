import { configureStore } from "@reduxjs/toolkit";

//reducers
import taskReducer from "../features/tasks/taskSlices";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
