import SideBar from "../CommonPage/SideBar/SideBar";
import "./Main.css";
import MemoList from "./MemoList";

const Main = () => {
  return (
    <div className="main">
      <SideBar />
      <div className="main-container">
        <h1 className="main-title">DA : HAENG</h1>
        <MemoList />
      </div>
    </div>
  );
};
export default Main;
