import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { categoryActions, MemoDataState } from "../store/category-slice";
import CategoryContent from "./CategoryContent";
import "./Detail.css";

type CategoryProps = {
  mainId: number;
};

const Category = (props: CategoryProps) => {
  const mainId = props.mainId;
  const dispatch = useDispatch();
  const dataId = useRef(4);

  const mainItems: MemoDataState = useSelector(
    (state: RootState) => state.category.items
  );
  const categoryItems = mainItems.filter((it) => it.mainId === mainId);

  const categoryData = categoryItems.map((it) => it.document);
  const categoryDataObject = categoryData.reduce((it) => it);

  const [Highlight, setHighlight] = useState(1);
  const [categoryId, setCategoryId] = useState(1);

  const onHighlight = (id: any) => {
    setHighlight(id);
    setCategoryId(id);
  };

  const addItemHandler = () => {
    dispatch(
      categoryActions.addItemToCategory({
        categoryId: dataId.current,
        categoryTitle: "카테고리명",
        mainId: mainId,
      })
    );
    dataId.current += 1;
  };

  return (
    <div className="category">
      <div className="category_container">
        {categoryData &&
          categoryDataObject.map((it) => (
            <span
              id={String(it.categoryId)}
              className={
                Highlight === it.categoryId
                  ? "category_title_highlight"
                  : "category_title"
              }
              onClick={() => onHighlight(it.categoryId)}
            >
              {it.categoryTitle}
            </span>
          ))}
        <span className="cateogory_create" onClick={addItemHandler}>
          + 카테고리 추가
        </span>
      </div>
      <div className="category_context">
        {categoryItems && (
          <CategoryContent
            mainId={mainId}
            categoryId={categoryId}
            item={categoryDataObject}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
