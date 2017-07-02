var express = require('express');
var request = require("request");
var app = express();
var token, postman;
var originAllowed = 'https://spotifylite.herokuapp.com/';
app.use(express.static(__dirname + '/dist'));
app.set('view engine', 'html');

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});

app.get('/home', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});

app.get('/about', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html');
});

app.get('/api/searchMusic/:str', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', originAllowed);
    console.log('Search Music for: ', req.params.str);
    var type = 'artist';
    postman.url = 'https://api.spotify.com/v1/search?query=' + req.params.str + '&offset=0&limit=10&type=' + type + '&market=US';
    request(postman, (error, response, body) => {
      if (error) throw new Error(error);
      res.send(body);
    });
});

app.get('/api/getArtist/:str', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', originAllowed);
    console.log('Getting Artist: ', req.params.str);
    postman.url = 'https://api.spotify.com/v1/artists/' + req.params.str;
    request(postman, (error, response, body) => {
      if (error) throw new Error(error);
      res.send(body);
    });
});

app.get('/api/getAlbums/:str', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', originAllowed);
    console.log('Getting Albums: ', req.params.str);
    postman.url = 'https://api.spotify.com/v1/artists/' + req.params.str + '/albums';
    request(postman, (error, response, body) => {
      if (error) throw new Error(error);
      res.send(body);
    });
});

app.get('/api/getAlbum/:str', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', originAllowed);
    console.log('Getting Album: ', req.params.str);
    postman.url = 'https://api.spotify.com/v1/albums/' + req.params.str;
    request(postman, (error, response, body) => {
      if (error) throw new Error(error);
      res.send(body);
    });
});

// Helper function
setInterval( () => getToken(), 3600000);
getToken();
function getToken() {
  var options = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'authorization': 'Basic Y2U2NjYyOGEyZjI3NDQwMGIxYTViZWM2YWY0NTY4MGI6MjYxOGY2ZmVhODFmNDY0ZWE3NTE4ZjQ5M2NmZmNhNmQ=' 
    }, form: {
      grant_type: 'client_credentials'
    }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    body = JSON.parse(body);
    token =  body.token_type + " " + body.access_token;
    postman = {
      method: 'GET',
      headers: {
        authorization: token
      }
    };
    console.log(token);
  });
}
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

