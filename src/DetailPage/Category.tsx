import { useRef, useState } from "react";
// import CategoryContent from "./CategoryContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { categoryActions, MemoDataState } from "../store/category-slice";
import CategoryContent from "./CategoryContent";
import "./Detail.css";

type CategoryProps = {
  id: number
} 

const Category = (props: CategoryProps) => {
  const id = props.id;
  const dispatch = useDispatch();
  const dataId = useRef(4);

  const mainItems: MemoDataState = useSelector((state: RootState) => state.category.items);
  const categoryItems = mainItems.filter(
    (it) => it.mainId === id
  );
  console.log();

  const categoryData = categoryItems.map((it) => it.document);
  const categoryDataObject = categoryData.reduce((it) => it);

  const [Highlight, setHighlight] = useState(1);
  const [memoId, setMemoId] = useState(1);

  const onHighlight = (id: any) => {
    setHighlight(id);
    setMemoId(id);
  };

  const addItemHandler = () => {
    dispatch(
      categoryActions.addItemToCategory({
        categoryId: dataId.current,
        categoryTitle: "카테고리명",
        id: id,
      })
    );
    dataId.current += 1;
    console.log(mainItems);
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
          <div key={memoId}>
            <CategoryContent id={memoId} item={categoryDataObject} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
