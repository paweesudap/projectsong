import React, { useState } from "react";
import "./Modal.css";
import Appp from './App';


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  return (
    <>
      <p onClick={toggleModal} className="btn-modal">
        <img src="/images/snowman.png" width="100%"></img>
      </p>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Merry Christmas<br></br> Enjoy with music!!!</h2>
            <div className="video">
            <iframe height="100%" src="https://www.youtube.com/embed/hNkvV4PR-q0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="close-modal" onClick={toggleModal}>
              X
            </p>
          </div>
        </div>
      )}

    </>
  );
}