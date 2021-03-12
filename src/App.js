import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";

import "./App.css";

const ApiKey = "19902573-b9fa82d62327bd625e4b4b636";

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
    showModal: false,
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
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          page: prevState.page + 1,
        }))
      )
      .finally(() => this.setState({ isLoading: false }));
  };

  onLoadMoreButtonShow = () => {
    return this.state.images.length > 0;
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.onLoadMoreButtonShow() && !this.state.isLoading && (
          <Button onSubmit={this.fetchImages} />
        )}
      </div>
    );
  }
}

export default App;
