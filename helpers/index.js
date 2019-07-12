class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const defaultMessage =
    "Oops, An error occurred trying to process your request";
  const statusCode = err.statusCode ? err.statusCode : 500 ;
  const message = err.message ? err.message : defaultMessage ;
  res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: message
  });
};

module.exports = {
  handleError,
  ErrorHandler
}