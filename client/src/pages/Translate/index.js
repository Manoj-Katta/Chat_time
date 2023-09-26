const http = require('https');

const options = {
	method: 'GET',
	hostname: 'nlp-translation.p.rapidapi.com',
	port: null,
	path: '/v1/translate?text=Hello%2C%20world!!&to=es&from=en',
	headers: {
		'X-RapidAPI-Key': '0ebc4c3f30mshf56d4b990ef774fp1074e6jsn005c95a7b648',
		'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();