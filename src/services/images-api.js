import axios from "axios";

const ApiKey = "19902573-b9fa82d62327bd625e4b4b636";

// axios.defaults.headers.common["Authorization"] =
//   "Bearer 19902573-b9fa82d62327bd625e4b4b636";

const fetchImages = ({ query = "", page = 1, pageSize = 12 }) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
  );
};

const imagesApi = { fetchImages };

export default imagesApi;
