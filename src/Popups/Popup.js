import React, { useEffect, useState } from "react";

const Popup = (props) => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.active) {
      setActive(true);
      setTimeout(() => {
        setShow(true);
      }, 350);
    } else {
      setShow(false);
      setTimeout(() => {
        setActive(false);
      }, 350);
    }
  }, [props.active]);


  return (
    <>
      <div
        className={`popup ${active ? "active" : ""} ${
          show ? "show" : ""
        }`}
      >
        <div className="overlay"></div>
        <div className={`inner-popup ${props.class}`}>
          <div className="heading">
            <h4>{props.title}</h4>
            <button type="button" className="btn-blue" onClick={props.popupStatus}>
              <img src="./assets/close.svg" />
            </button>
          </div>
          <div className="contents">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
