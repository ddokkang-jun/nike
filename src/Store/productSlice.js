import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  size: [
    240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310,
    320, 330,
  ],
  suggestValue: [],
  detailPageTabValue: 0,
  fadeValue: "",
  selectedSizeValue: 0,
  sizeSelectWarning: true,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    setSuggestShoes: (state, action) => {
      state.suggestValue = action.payload;
    },
    setdetailPageTabValue: (state, action) => {
      state.detailPageTabValue = action.payload;
    },
    setFade: (state, action) => {
      state.fadeValue = action.payload;
    },
    setSelectProductSize: (state, action) => {
      state.selectedSizeValue = action.payload;
    },
    setSizeSelectWarning: (state, action) => {
      state.sizeSelectWarning = action.payload;
    },
  },
});

export const { setProducts, setSuggestShoes, setdetailPageTabValue, setFade, setSelectProductSize, setSizeSelectWarning } =
  productSlice.actions;
export default productSlice.reducer;
