import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisodes = createAsyncThunk(
  "heroes/fetchEpisodes",
  async (page) => {
    try {
      const data = await axios.get(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      return data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const episodesSlice = createSlice({
  name: "episodes",

  initialState: {
    liftOfEpisodes: [],
    currentPage: 1,
    infoPage: null,
    status: null,
    error: null,
  },

  reducers: {
    nextHandler: (state) => {
      state.currentPage += 1;
    },
    prevHandler: (state) => {
      state.currentPage -= 1;
    },
  },

  extraReducers: {
    [fetchEpisodes.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.liftOfEpisodes = action.payload.results;
      state.infoPage = action.payload.info;
    },
    [fetchEpisodes.error]: (state, action) => {
      state.status = "rejected";
      state.error = action.error;
    },
  },
});

export const { nextHandler, prevHandler } = episodesSlice.actions;

export default episodesSlice.reducer;