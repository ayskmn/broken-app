
//PART 2
//1
const fs = require('fs');
const argv = process.argv;
const axios = require('axios');


fs.readFile('urls.txt', 'utf8', function(err, data) {
	if (err) {
	  console.error(err);
	  process.exit(1);
	}
	console.log(`file contents: ${data}`);

})

//2 & 3
async function getData() {
	try {
		const res = await axios.get("http://rithmschool.com");
		console.log(res.data);
		fs.writeFile('rithmschool.com', res.data , function (err) {
			if (err) throw err;
			console.log('File is created successfully.');
		});
	} catch(err) {
		console.error(err);
	}
	
}
getData();

