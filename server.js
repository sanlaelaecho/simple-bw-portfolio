require('dotenv').config();

const app = require('./app-server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`ME ME ME on port ${PORT}`);
});