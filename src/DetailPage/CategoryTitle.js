import React, { useState } from "react";

const CategoryTitle = (props) => {
  const { id, title } = props.item;
  const [Highlight, setHighlight] = useState(1);
  const [memoId, setMemoId] = useState(1);

  console.log(id);
  const onHighlight = (id) => {
    setHighlight(id);
    setMemoId(id);
  };

  const doubleClickHandler = () => {
    console.log(memoId);
  };
  return (
    <div>
      <span
        id={id}
        className={
          Highlight === id ? "category_title_highlight" : "category_title"
        }
        onClick={() => onHighlight(title)}
        onDoubleClick={doubleClickHandler}
      >
        {title}
      </span>
    </div>
  );
};

export default CategoryTitle;
