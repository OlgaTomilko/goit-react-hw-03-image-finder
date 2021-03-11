import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

const ApiKey = "19902573-b9fa82d62327bd625e4b4b636";
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

class App extends Component {
  state = {
    images: [],
    page: 1,
    showModal: false,
  };

  componentDidMount() {}

  onChangeQuery = (query) => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => this.setState({ images: response.data.hits }));
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
