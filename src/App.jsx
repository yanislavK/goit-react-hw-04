import "./App.css";
import { useEffect, useState } from "react";
import { fetchImagesBySearch } from "./images-api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [search, setSearch] = useState("");
  const [fetchedImages, setFetchedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [page, setPage] = useState(1);

  const handleOpen = (imageSource) => {
    setModalImage(imageSource);
    openModal();
  };
  const handleSearch = (search) => {
    setSearch(search);
    setPage(1);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const newImages = await fetchImagesBySearch(search, nextPage);
    setFetchedImages((prevImages) => [...prevImages, ...newImages]);
    setPage(nextPage);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (search === "") {
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setTimeout(() => {
          fetchImagesBySearch(search).then((data) => {
            setFetchedImages(data);
            setLoading(false);
          });
        }, 100);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchImages();
  }, [search]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {fetchedImages.length > 0 && (
        <>
          <ImageGallery
            handleOpen={handleOpen}
            modalIsOpen={modalIsOpen}
            fetchedImages={fetchedImages}
          />
          {loading && <Loader />}
          <LoadMoreBtn loadMore={handleLoadMore} />
        </>
      )}

      {error && <ErrorMessage />}
      <ImageModal
        modalImage={modalImage}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
}

export default App;
