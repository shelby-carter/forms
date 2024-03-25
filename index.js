const express = require('express');
const { port } = require('./config');
const { fetchFormResponses } = require('./apiService');
const { applyFilters } = require('./filterService');
const errorHandler = require('./errorHandler');

const app = express();
app.use(express.json());

app.get('/:formId/filteredResponses', async (req, res, next) => {
  const { formId } = req.params;
  let { filters, page = 1, limit = 150 } = req.query;

  // Ensure that page and limit are integers
  page = parseInt(page, 10);
  limit = parseInt(limit, 10);
  
  try {
    const rawData = await fetchFormResponses(formId, page, limit);
    const parsedFilters = filters ? JSON.parse(filters) : [];
    
    const filteredResponses = applyFilters(parsedFilters, rawData.responses);
    const totalResponses = filteredResponses.length;
    const pageCount = Math.ceil(totalResponses / limit);
    const pagedResponses = filteredResponses.slice((page - 1) * limit, page * limit);

    res.json({
      responses: pagedResponses,
      totalResponses,
      pageCount
    });
  } catch (error) {
    console.error('Error in /filteredResponses:', error.message);
    next(error); // Pass errors to the error handling middleware.
  }
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
