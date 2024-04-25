/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

// eslint-disable-next-line react/prop-types
const ImageGallery = ({ fetchedImages, handleOpen }) => {
  return (
    <ul className={css.ul}>
      {fetchedImages.map(({ urls, alt_description, id }) => (
        // eslint-disable-next-line react/jsx-key
        <li className={css.li} key={id}>
          <ImageCard
            handleOpen={handleOpen}
            links={urls}
            alt_description={alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
