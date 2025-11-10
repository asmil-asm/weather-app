import { configureStore } from '@reduxjs/toolkit'
import weatherRedux from './weatherRedux'
export const store=configureStore({
    reducer:{
        weather:weatherRedux
    },
})
