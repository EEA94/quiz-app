import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/data';

const store = configureStore({
    reducer: {
        datas: dataReducer
    }
})

export default store;