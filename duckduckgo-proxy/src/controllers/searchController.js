const searchService = require("../services/searchService");
const { BadRequestError } = require("../errors/errorConstructor");
const QueryHistory = require("../models/queryHistory");
const catchAsync = require("../utils/catchAsync");

const getSearchResults = catchAsync(async (req, res, next) => {
  const { query } = req.query;
  if (!query) {
    return next(new BadRequestError("Query parameter is missing"));
  }
  QueryHistory.add(query);
  const searchResults = await searchService.getSearchResults(query);
  res.status(200).json(searchResults);
});

const getQueryHistory = catchAsync(async (req, res, next) => {
  const history = await QueryHistory.getAll();
  res.status(200).json(history);
});

module.exports = {
  getSearchResults,
  getQueryHistory,
};
