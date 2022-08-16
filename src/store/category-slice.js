import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [
      {
        mainId: 1,
        document: [
          {
            categoryId: 1,
            categoryTitle: "DAY1",
            cell: [
              {
                id: 1,
                text: "협재로 가서 숙소 체크인!",
                type: "h2",
                color: "black",
              },
              {
                id: 2,
                text: "일단 공항 근처에서 점심먹기 - 돼지국밥!",
                type: "h2",
                color: "black",
              },
            ],
          },
          { categoryId: 2, categoryTitle: "DAY2", cell: [] },
          { categoryId: 3, categoryTitle: "DAY3", cell: [] },
        ],
      },
      {
        mainId: 2,
        document: [
          { id: 1, cell: [] },
          { id: 2, cell: [] },
        ],
      },
      {
        mainId: 3,
        document: [
          { id: 1, cell: [] },
          { id: 2, cell: [] },
        ],
      },
    ],
  },
  reducers: {
    addItemToCategory(state, action) {
      const newItem = action.payload;
      const id = newItem.id + 1;
      /*state.items.push({
        categoryId: newItem.categoryId,
        categoryTitle: newItem.categoryTitle,
      });*/
      //조건!
    },
    removeItemToMain(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const categoryActions = categorySlice.actions;
export default categorySlice;
