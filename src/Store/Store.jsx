import {configureStore} from '@reduxjs/toolkit'
import  Sidebar  from './Slices/SidebarSlice'


export const store = configureStore({
    reducer:{
        Sidebar:Sidebar,
    }

})