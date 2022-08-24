import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Document } from "../store/category-slice";
import "./Detail.css";

type CategoryContentProps = {
  id: number,
  item: Document[],
}

const CategoryContent = (props: CategoryContentProps) => {
  // const categoryItem = props.item;
  const id = props.id;

  const [content, setContent] = useState(null);
  const [memoId, setMemoId] = useState();

  const categoryContent = props.item.find(
    (it: Document) => it.categoryId === id
  );

  const categoryCell = categoryContent?.cell;
  console.log(categoryCell);

  return (
    <div className="CategoryContent">
      {categoryCell?.map((it) => (
        <input value={it.text}></input>
      ))}
    </div>
  );
};
export default CategoryContent;
