const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const chineseWisdom = [
	{
		title: 'Life Opportunity',
		body: 'A crisis is an opportunity riding the dangerous wind.',
	},
	{
		title: 'Destiny',
		body: 'A journey of a thousand miles begins with a single step.',
	},
	{
		title: 'Breathe, live and be happy',
		body: 'A bird does not sing because it has an answer. It sings because it has a song.',
	},
	{
		title: 'Experience and Enjoy',
		body: 'Be not afraid of growing slowly, be afraid only of standing still.',
	},
];

app.get('/api/wisdom', (req, res) => {
	res.send(chineseWisdom);
});

app.get('/api/wisdom/:id', (req, res) => {
	const wisdom = chineseWisdom.filter(wisdom => wisdom.id.toString() === req.params.id)[0];
	res.status(200).json(wisdom);
});

app.post('/api/wisdom', (req, res) => {
	if (req.body !== undefined) chineseWisdom.unshift(req.body);
	console.log('sever : ',req.body)
	res.status(201).json(req.body);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
