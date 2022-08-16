import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../CommonPage/SideBar/SideBar";
import DetailHeader from "./DetailHeader";
import Category from "./Category";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();

  const mainItems = useSelector((state) => state.main.items);
  const detailItems = mainItems.find((it) => parseInt(it.id) === parseInt(id));

  const navigate = useNavigate();

  return (
    <div className="DetailPage">
      <div className="side-memu">
        <SideBar />
      </div>
      <div className="memo-container">
        <div className="memo-header">
          {mainItems && <DetailHeader title={detailItems.title} />}
        </div>
        <div className="memo-content">
          {mainItems && <h1>{detailItems.title}</h1>}
          {mainItems && <span>{detailItems.date}</span>}
        </div>
        <div className="memo-category">
          <Category id={id} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
