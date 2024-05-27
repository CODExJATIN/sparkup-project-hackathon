import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    accountType:''
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state,action) => {
            const updatedPost = state.posts.map((post)=>{
                if(post._id === action.payload.post._id) return action.payload.post;

                state.posts=updatedPost
            })
        },
        setConnection: (state, action) => {
          if(state.user){
            state.user.connection = action.payload.connection;
          }
          else{
            console.error("User not found");
          }
           

        },
        setAccountType: (state,action)=>{
            state.accountType = action.payload.accountType;
        }
    },
});

export const { login, logout, setMode, setPosts, setPost, setConnection,setAccountType } = authSlice.actions;

export default authSlice.reducer;