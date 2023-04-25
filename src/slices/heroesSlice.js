import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchHeroes",
  async (page) => {
    try {
      const data = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
      return data.data;
    } catch (error) {
      return error.message
    }
  }
);

export const fetchOneHero = createAsyncThunk(
  "heroes/fetchOneHero",
  async (id) => {
    try {
      console.log('id',id)
      const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      return data.data;
    } catch (error) {
      return error.message
    }
  }
);


export const heroesSlice = createSlice({
  name: "heroes",

  initialState: {
    listOfСharacter: [],
    infoPage: null,
    hero: null,
    status: null,
    error: null,
    currentPage: 1,
  },

  reducers:{
    nextHandler: (state) => {
      state.currentPage += 1;
    },
    prevHandler: (state) => {
      state.currentPage -= 1;
    },
  },

  extraReducers: {
      [fetchHeroes.pending]: (state) => { 
        state.status = 'loading';
        state.error = null;
      },
      [fetchHeroes.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.listOfСharacter = action.payload.results;
        state.infoPage = action.payload.info;
      },
      [fetchHeroes.error]: (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      },
      [fetchOneHero.pending]: (state) => { 
        state.status = 'loading';
        state.error = null;
      },
      [fetchOneHero.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.hero = action.payload;
      },
      [fetchOneHero.error]: (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      },
  },
});

export const { nextHandler, prevHandler } = heroesSlice.actions;


export default heroesSlice.reducer;
