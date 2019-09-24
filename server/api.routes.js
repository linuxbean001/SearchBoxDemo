const express = require('express');
const apiRoutes = express.Router();
const rp = require('request-promise');
const cheerio = require('cheerio');

apiRoutes.route('/get_data').get(function (req, res) {  
  rp('https://www.chevron.com/stories?page=1',(error, response, html)=>{
    if(!error && response.statusCode == 200){
      const $ = cheerio.load(html);
      var arrData = [];
      $('.card-content').each((i,el)=>{
        const title = $(el).find('.headline').text().trim().toLowerCase();
        if(title != ''){ arrData.push(title);}  
      });
      const uniqueData = JSON.stringify(getUnique(arrData));
      res.json(uniqueData);
    }
  });
});

function getUnique(arr){
  const final = [ ];
  arr.map((e,i)=> !final.includes(e.toLowerCase()) && final.push(e) )
  return final
}

module.exports = apiRoutes;