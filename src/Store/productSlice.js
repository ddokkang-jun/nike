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
  menShoes: [],
  menCloth: [],
  womenShoes: [],
  womenCloth: [],
  kidsShoes: [],
  kidsCloth: [],
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
    setMenShoes: (state, action) => {   // 남성 신발 데이터
      state.menShoes = action.payload;
    },
    setMenCloth: (state, action) => {
      state.menCloth = action.payload;
    },
    setWomenShoes: (state, action) => {
      state.womenShoes = action.payload;
    },
    setWomenCloth: (state, action) => {
      state.womenCloth = action.payload;
    },
    setKidsShoes: (state, action) => {
      state.kidsShoes = action.payload;
    },
    setKidsCloth: (state, action) => {
      state.kidsCloth = action.payload;
    },
  },
});

export const { setProducts, setSuggestShoes, setdetailPageTabValue, setFade, setSelectProductSize, setSizeSelectWarning, setMenShoes,setMenCloth,setWomenShoes,setWomenCloth,setKidsShoes,setKidsCloth } =
  productSlice.actions;
export default productSlice.reducer;
