const {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} = require("./errorConstructor");

function globalErrorHandler(err, req, res, next) {
  switch (err.constructor) {
    case NotFoundError:
      res.status(404).json({ error: err.message });
      break;
    case BadRequestError:
      res.status(400).json({ error: err.message });
      break;
    case InternalServerError:
      res.status(500).json({ error: err.message });
      break;
    default:
      console.error(err.stack);
      res.status(500).json({ error: "Uncaught server error." });
  }
}

module.exports = globalErrorHandler;
