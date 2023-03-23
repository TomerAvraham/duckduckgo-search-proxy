const axios = require("axios");

function createSearchResultItem(resultItem) {
  return {
    title: resultItem.Text,
    url: resultItem.FirstURL,
  };
}

const searchService = {
  async getSearchResults(query) {
    const apiUrl = process.env.DDG_API_URL;
    const queryParams = {
      q: query,
      format: "json",
    };
    try {
      const response = await axios.get(apiUrl, { params: queryParams });
      const searchResults = response.data.RelatedTopics.flatMap(
        ({ Topics, ...result }) => {
          return Topics
            ? Topics.map(createSearchResultItem)
            : createSearchResultItem(result);
        }
      );
      return searchResults;
    } catch (error) {
      console.error(error);
      throw new Error("An error occurred while searching");
    }
  },
};

module.exports = searchService;
