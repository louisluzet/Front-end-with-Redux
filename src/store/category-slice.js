import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

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
          {
            categoryId: 2,
            categoryTitle: "DAY2",
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
          { categoryId: 3, categoryTitle: "DAY3", cell: [] },
        ],
      },
      {
        mainId: 2,
        document: [
          {
            categoryId: 1,
            categoryTitle: "DAY1 두번째",
            cell: [
              {
                id: 1,
                text: "협재로 가서 숙소 체크인22!",
                type: "h2",
                color: "black",
              },
              {
                id: 2,
                text: "일단 공항 근처에서 점심먹기22 - 돼지국밥!",
                type: "h2",
                color: "black",
              },
            ],
          },
          { categoryId: 2, categoryTitle: "DAY2 두번째", cell: [] },
          { categoryId: 3, categoryTitle: "DAY3 두번째", cell: [] },
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
      return produce(state, (draft) => {
        const find = draft.items.find(
          (item) => parseInt(item.mainId) === parseInt(newItem.id)
        );
        find.document.push({
          categoryId: newItem.categoryId,
          categoryTitle: newItem.categoryTitle,
          cell: [],
        });
      });

      // const newItem = action.payload;
      // const existingItem = state.items.find(
      //   (item) => item.mainId === newItem.id
      // );
      // existingItem.document.push({
      //   categoryId: newItem.categoryId,
      //   categoryTitle: newItem.categoryTitle,
      // });
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
