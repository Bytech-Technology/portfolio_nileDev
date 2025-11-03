const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
dotenv.config();

app.set('view engine', 'ejs');
app.use(express.static('public/'));
app.use(express.static('assets/'));
app.use('/', routes);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});