import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./Detail.css";

const DetailHeader = ({ title }) => {
  const [isSetting, setSetting] = useState(false);
  const onSetting = () => {
    setSetting(!isSetting);
  };

  return (
    <div className="DatailHeader">
      <h2>{title}</h2>
      <FontAwesomeIcon
        icon={faEllipsis}
        className="memo-setting"
        onClick={onSetting}
      />
      {isSetting && <DetailHeader />}
    </div>
  );
};
export default DetailHeader;
