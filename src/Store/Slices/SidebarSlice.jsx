import {createSlice } from "@reduxjs/toolkit";


export const Sidebar =  createSlice({
    initialState :false,
    name:'Sidebar',
    reducers:{
        SidebarVisable :(state)=>{
            return state = true;
        },
        
        SidebarNotVisable :(state)=>{
            return state = false;
        },

    },


})

export const { SidebarVisable ,SidebarNotVisable} =Sidebar.actions
export default Sidebar.reducer