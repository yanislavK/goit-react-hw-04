import css from "../ImageModal/ImageModal.module.css";

/* eslint-disable react/prop-types */
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "640px",
    width: "100%",
    height: "80%",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ modalImage, afterOpenModal, onRequestClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <img className={css.img} src={modalImage} alt="" />
    </Modal>
  );
};
export default ImageModal;
