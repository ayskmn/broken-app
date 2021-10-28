const express = require('express');
let axios = require('axios');
var app = express();

const baseURI = 'https://api.github.com/users/';

app.use(express.json());


app.post('/', async function(req, res, next) {
  let promises = [];

  req.body.developers.map(d => {
    promises.push(axios.get(`${baseURI}${d}`).catch(err =>{
      console.log(`${err}: ${d} does not exist!`)
      return err;
    }));
  })

  const data = await Promise.all(promises);
  const out = data.map( response => {
    try {
      return ({name: response.data.name, bio: response.data.bio})
    } catch (err){
      next(err)
    }
  });
  return res.json(out);

});




app.listen(3000)