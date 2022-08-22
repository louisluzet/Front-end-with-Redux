import React from "react";
import "./Detail.css";

const DetailSetting = () => {
  return (
    <div className="DetailSetIcon">
      <div className="detailsetting">
        <span>페이지 삭제</span>
      </div>
      <div className="detailsetting">
        <span>멤버 추가</span>
      </div>
      <div className="detailsetting detailsetting_none">
        <span>PDF 내보내기</span>
      </div>
    </div>
  );
};

export default DetailSetting;
