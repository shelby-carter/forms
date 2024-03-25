// Error handling middleware
const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    error: error.message || 'An error occurred while processing your request.'
  });
};

module.exports = errorHandler;