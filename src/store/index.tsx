import {configureStore} from '@reduxjs/toolkit'
import { saveToLocalStorageMiddleware } from "../middleware/localeStorageMiddleware";
import { elementReducer } from "./todoReducer";

export default configureStore( {
 reducer: elementReducer,
 middleware: getDefaultMiddleware => getDefaultMiddleware().concat(saveToLocalStorageMiddleware),
}
);
