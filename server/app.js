const rp = require('request-promise');
const cheerio = require('cheerio');



rp('https://www.chevron.com/stories',(error, response, html)=>{
	if(!error && response.statusCode == 200){
		const $ = cheerio.load(html);
		const headeLine = $('.headline');

		var arrData = [];
		$('.card-content').each((i,el)=>{
			const title = $(el).find('.headline').text().trim().toLowerCase();
			if(title != ''){ arrData.push(title);}	

			// const url = $(el).find('a').attr('href').trim();	
			// // console.log(url);

			// const date = $(el).find('.theme-date-line').text();

			// console.log(url+'-------'+date+'------->'+title);
		});
		const uniqueData = JSON.stringify(getUnique(arrData));
		console.log(uniqueData);
	}

})

function getUnique(arr){
  const final = [ ];
  arr.map((e,i)=> !final.includes(e.toLowerCase()) && final.push(e) )
  return final
}