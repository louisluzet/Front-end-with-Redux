import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Detail.css";

const CategoryContent = (props) => {
  const categoryItem = props.item;
  const id = props.id;

  const [content, setContent] = useState(null);
  const [memoId, setMemoId] = useState();

  const categoryContent = categoryItem.find(
    (it) => parseInt(it.categoryId) === parseInt(id)
  );

  const categoryCell = categoryContent.cell;
  console.log(categoryCell);

  return (
    <div className="CategoryContent">
      {categoryCell.map((it) => (
        <input value={it.text}></input>
      ))}
    </div>
  );
};
export default CategoryContent;
