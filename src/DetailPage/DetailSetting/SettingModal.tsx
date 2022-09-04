import React from "react";
import "./Modal.css";

type ModalDefaultType = {
  open: boolean;
  close: () => void;
  header: String;
  children: String;
};

const SettingModal = (props: ModalDefaultType) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <div className="modal-div">
            <input
              placeholder="EMAIL을 검색해주세요"
              className="modal-span"
            ></input>
            <main>{props.children}</main>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default SettingModal;
