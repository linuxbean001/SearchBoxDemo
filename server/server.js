const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const api = require('./api.routes');



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', api);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});