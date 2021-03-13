import React, { Component } from "react";
import imagesApi from "./services/images-api";
import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
    showModal: false,
    currentImg: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onChangeQuery = (query) => {
    this.setState({ query: query, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    const options = { query, page };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMoreButtonShow = () => {
    return this.state.images.length > 0;
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleImageClick = (index) => {
    this.setState({
      currentImg: this.state.images.filter(({ id }) => id === Number(index)),
    });
    this.toggleModal();
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        />
        {this.state.isLoading && <Loader />}
        {this.onLoadMoreButtonShow() && !this.state.isLoading && (
          <Button onSubmit={this.fetchImages} />
        )}
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            img={this.state.currentImg[0].largeImageURL}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;
