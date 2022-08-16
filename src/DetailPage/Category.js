import { useRef, useState } from "react";
// import CategoryContent from "./CategoryContent";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../store/category-slice";

const Category = (props) => {
  const id = props.id;
  const dispatch = useDispatch();
  const dataId = useRef(4);

  const mainItems = useSelector((state) => state.category.items);
  const categoryItems = mainItems.filter(
    (it) => parseInt(it.mainId) === parseInt(id)
  );

  const categoryData = categoryItems.map((it) => it.document);
  const categoryDataObject = categoryData.reduce((it) => it);

  const [Highlight, setHighlight] = useState(1);
  const [memoId, setMemoId] = useState(1);

  const onHighlight = (id) => {
    setHighlight(id);
    setMemoId(id);
  };

  const addItemHandler = () => {
    dispatch(
      categoryActions.addItemToCategory({
        categoryId: dataId.current,
        categoryTitle: "카테고리명",
        id,
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
              key={it.categoryId}
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
            {/* <CategoryContent categoryId={memoId} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;