require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  filloutApiKey: process.env.FILLOUT_API_KEY,
  filloutBaseUrl: process.env.FILLOUT_BASE_URL || 'https://api.fillout.com/v1'
};

module.exports = config;
