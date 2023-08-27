const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
const frontendPath = path.join(__dirname, '..', 'frontend', 'build');

app.use(express.static(frontendPath));

const routes = ["/", "/about", "/contact", "/work"]

app.get(routes, (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = 8080;
app.listen(PORT, (req) => {
    console.log(`Listening on port ${PORT}`);
});