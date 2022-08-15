import { useDispatch } from "react-redux";
import { mainActions } from "../store/main-slice";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const MemoItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, description, date, color } = props.item;

  const navigate = useNavigate();

  return (
    <div className="main-memo">
      <div className="main-memotitle">
        <div className="main-memotitle-left">
          <input type="text" className="main-memotitle_input" value={title} />
          <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
        </div>

        <div className="main-memotitle-right">
          {/* <div className="main-memotitle-colorwidget">
            <div className="main-memotitle-color-1"></div>
            <div className="main-memotitle-color-2"></div>
            <div className="main-memotitle-color-3"></div>
            <div className="main-memotitle-color-4"></div>
          </div> */}
        </div>
      </div>

      <div className="main-memocontext">
        <input type="text" className="main-memodate" value={date} />
        <input type="text" className="main-memointro" value={description} />
      </div>

      <div className="main-memobottom">
        <div>
          <FontAwesomeIcon icon={faTrash} className="trash-icon" />
        </div>

        <div className="main-memomember">
          {/* <span>융</span>
                <span>다</span>
                <span>슬</span>
                <span>지</span> */}
        </div>
      </div>
    </div>
  );
};
export default MemoItem;
