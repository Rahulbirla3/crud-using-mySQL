import { configureStore } from '@reduxjs/toolkit';
import { taskApi } from '../services/taskApi';
import printReducer from '../Reducers/print';

export default configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        printData: printReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware)
})