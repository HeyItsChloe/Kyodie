/* ---------------------------------------------------- IMPORTS + MODULES + SERVER ---------------------------------------------------- */
const path = require('path');
const bodyparser = require('body-parser');
/* creating a server */
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
/* parsers */
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json())




/* ---------------------------------------------------- ROUTES ---------------------------------------------------- */
/* statically serve everything in the build folder on the route '/build' */
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/images', express.static(path.join(__dirname, '../assets/images')));

/* serve the `index.html` file on the route '/' */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});




/* ---------------------------------------------------- ERROR HANDLERS ---------------------------------------------------- */
app.use('*', (req, res, next, err) => {
    console.log('err / catch all', err);
    res.status(404);
})

app.use((err, req, res, next) => {
    console.log('global', err);
    res.status(500).send('Internal Server Error');
})


