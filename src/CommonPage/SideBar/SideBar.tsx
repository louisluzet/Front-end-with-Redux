
import React, { useState } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import HomeSettingModal from "./HomeSettingModal";

const SideBar = () => {
  const navigate = useNavigate();
  const [settingModal, setSettingModal] = useState<boolean>(false);
  const openSettingModal = () => {
    setSettingModal(true);
  };
  const closeSettingModal = () => {
    setSettingModal(false);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <span className="profile-name">가</span>
        <span className="profile-info profile-info-top">짱윤지님의</span>
        <span className="profile-info">다행 :)</span>
      </div>
      <div className="sidebar-btn-top">
        <span>
          <FontAwesomeIcon
            icon={faHome}
            className="sidebar-btn"
            onClick={() => navigate("/main")}
          />
        </span>
        <FontAwesomeIcon icon={faCog} className="sidebar-btn faCog" onClick={openSettingModal}/>
        <FontAwesomeIcon icon={faBell} className="sidebar-btn faBell" />
      </div>
      <div className="sidebar-btn-bottom">
        <FontAwesomeIcon icon={faSignOut} className="sidebar-btn faSignOut" />
      </div>
      <HomeSettingModal 
        open={settingModal}
        close={closeSettingModal}
      />
    </div>
  );
}

export default SideBar;
