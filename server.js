const express = require('express');

const app = express();
const port = process.env.PORT || 8600;

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: './' });
});

app.listen(port, () => { 
  console.log('Listening on ' + port) 
});