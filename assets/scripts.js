const antares = require('antares-http');
const express = require('express')
const app = express()

antares.setAccessKey('c0769d7e2f485191:1a356b543f0d7083');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function(req, res, next) {
	antares.get('Smartgarbage', 'Monitoring')
            .then(function(response) {
                console.log(response.content);
                res.json(response.content);
            });
});
app.listen(3000);