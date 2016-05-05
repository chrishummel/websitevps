var axios = require('axios');
var config = require('./config');
var querystring = require('query-string')

module.exports = function() {
  var query = querystring.stringify({
    key: config.API_KEY, 
    cx: config.search_ID, 
    q: "high"
  })
  axios({
    method: 'GET',
    url: "url"
  })
}