import axios from "axios";
const API_URL = "https://help-search-api-prod.herokuapp.com";

const getSearchResults = ({ searchTerm }) => {
  // TODO: This should be built out more with further functionality for our API.
  // We should look at further optimisation for this as well, such as caching.

  return axios
    .get(`${API_URL}/search?query=${searchTerm}`)
    .then(function (response) {
      const data = response.data;
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default getSearchResults;
