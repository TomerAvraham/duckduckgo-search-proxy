class NotFoundError extends Error {
  constructor(message = "Not found") {
    super(message);
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message);
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = {
  NotFoundError,
  InternalServerError,
  BadRequestError,
};
