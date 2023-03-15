import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addFavor } from "../../../../features/Favories";
import DialogOpen from "../../../Dialog";
export default function ModalCase({ setIsOpen }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddToFavor = () => {
    dispatch(
      addFavor({
        id: localStorage.getItem("id"),
        image: localStorage.getItem("image"),
        title: localStorage.getItem("title"),
        Year: localStorage.getItem("Year"),
        director: localStorage.getItem("director"),
        time: localStorage.getItem("time"),
        trailer: localStorage.getItem("trailer"),
        resolution: localStorage.getItem("resolution"),
        information: localStorage.getItem("information"),
      })
    );
    setOpen(true)
  };
  const dispatch = useDispatch();
  return (
    <div className="modal-show">
      <div id="modal1" className="modal">
        <div className="modal-content">
          <iframe
            src={localStorage.getItem("trailer")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="modal-footer">
          <button className="download">
            <span className="material-icons">menu</span>List
          </button>
          <button className="wishlist" onClick={handleAddToFavor}>
            <span className="material-icons">favorite</span>Add to Favorite
          </button>
          <button className="exit" onClick={() => setIsOpen(false)}>
            <span className="material-icons">exit_to_app</span>Exit
          </button>
        </div>
      </div>
      <DialogOpen to="/home" message="Adding success" open={open} handleClose={handleClose}/>
    </div>
  );
}
