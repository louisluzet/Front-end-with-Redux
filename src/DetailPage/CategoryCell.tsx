import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../store/category-slice";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cell } from "../store/category-slice";

type CategoryCellProps = {
  mainId: number;
  categoryId: number;
  item: Cell;
};

const CategoryCell = (props: CategoryCellProps) => {
  const dispatch = useDispatch();

  const categoryId = props.categoryId;
  const mainId = props.mainId;
  const cellItem = props.item;

  const [cellText, setCellText] = useState(cellItem.text);
  const [cellId, setCellId] = useState(cellItem.id);

  useEffect(() => {
    if (cellItem) {
      setCellText(cellItem.text);
      setCellId(cellItem.id);
    }
  }, [cellItem]);

  const changeTextHandler = (item: any) => {
    setCellText(item);
    dispatch(
      categoryActions.editCellToCategory({
        id: cellId,
        text: cellText,
        categoryId: categoryId,
        mainId: mainId,
      })
    );
  };

  const onKeyPress = (e: any) => {
    if (e.key === "Enter") {
      dispatch(
        categoryActions.addCellToCategory({
          id: 3,
          categoryId: categoryId,
          mainId: mainId,
          text: "입력해주세요",
        })
      );
    }
  };

  return (
    <div className="CategoryCellLine">
      <FontAwesomeIcon icon={faEllipsis} className="cellEllipsis" />
      <input
        id={String(cellId)}
        value={cellText}
        onKeyPress={onKeyPress}
        onChange={(e) => changeTextHandler(e.target.value)}
      ></input>
    </div>
  );
};

export default CategoryCell;
