import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITechnology from "@/src/interfaces/ITechnology";
import ICoverage from "@/src/interfaces/ICoverage";

interface IState {
  token: string;
  coverages: ICoverage[];
  technologies: ITechnology[];
}

const initialState: IState = {
  token: "",
  coverages: [],
  technologies: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    tokenChanged(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    technologiesChanged(state, action: PayloadAction<ITechnology[]>) {
      state.technologies = action.payload;
    },
    coveragesChanged(state, action: PayloadAction<ICoverage[]>) {
      state.coverages = action.payload;
    },
  },
});

export const { tokenChanged, coveragesChanged, technologiesChanged } =
  appSlice.actions;
export default appSlice.reducer;
