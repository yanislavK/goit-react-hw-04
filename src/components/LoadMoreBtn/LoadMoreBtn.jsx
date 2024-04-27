import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

/* eslint-disable react/prop-types */
const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.div}>
      <button
        className={css.button}
        onClick={() => {
          loadMore();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
