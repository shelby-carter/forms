const axios = require('axios');
const { filloutBaseUrl, filloutApiKey } = require('./config');

const fetchFormResponses = async (formId, page = 1, pageSize = 150) => {
  const url = `${filloutBaseUrl}/api/forms/${formId}/submissions?page=${page}&limit=${pageSize}`;
  const config = {
    headers: { Authorization: `Bearer ${filloutApiKey}` },
  };

  const response = await axios.get(url, config);
  return response.data;
};

module.exports = { fetchFormResponses };
