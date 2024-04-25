import css from "../ImageCard/ImageCard.module.css";

/* eslint-disable react/prop-types */
const ImageCard = ({ links, alt_description, handleOpen }) => {
  return (
    <div className={css.div}>
      <img
        className={css.img}
        src={links.small}
        alt={alt_description}
        onClick={() => {
          handleOpen(links.full);
        }}
      />
    </div>
  );
};

export default ImageCard;
