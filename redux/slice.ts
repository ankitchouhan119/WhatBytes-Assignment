// redux/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoreState {
  rank: string;           // Rank of the user
  percentile: string;     // Percentile of the user
  correctQuestions: string;
  percentileall: { [key: string]: number }; // Correct questions answered by the user
}

// Initial state for the slice
const initialState: ScoreState = {
  rank: '0',
  percentile: "0",
  correctQuestions: "0",
  percentileall :  {
    value1: 10,
    value2: 20,
    value3: 40,
    value4: 6,
    value5: 80,
  },
};

// Create the slice
const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    // Action to update rank
    setRank: (state, action: PayloadAction<string>) => {
      state.rank = action.payload;
    },
    // Action to update percentile
    setPercentile: (state, action: PayloadAction<string>) => {
      state.percentile = action.payload;
    },
    // Action to update correct questions
    setCorrectQuestions: (state, action: PayloadAction<string>) => {
      state.correctQuestions = action.payload;
    },
    setPercentileAll: (state, action: PayloadAction<object>) => {
      //@ts-ignore
      state.percentileall = action.payload;
    },
  },
});

// Export the actions to use in components
export const { setRank, setPercentile, setCorrectQuestions,setPercentileAll } = scoreSlice.actions;

// Combine the slice reducer for the store
export const rootReducer = {
  score: scoreSlice.reducer,
};

export default scoreSlice.reducer;
