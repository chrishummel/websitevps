var axios = require('axios');
var config = require('./config');
var querystring = require('query-string')

module.exports = function(req, res) {
  var query = querystring.stringify({ 
    key:config.API_KEY,
    cx: config.SEARCH_ID, 
    q: req.query.searchString
  })
  console.log('query:', query)
  console.log(req.query.searchString)
  axios({
    method: 'GET',
    url: "https://www.googleapis.com/customsearch/v1?" + query
  })
  .then(function(result){
    res.send(result)
  })
}