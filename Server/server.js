/* ---------------------------------------------------- IMPORTS + MODULES + SERVER ---------------------------------------------------- */
/* Modules */
const path = require('path');
const bodyparser = require('body-parser');
/* Create a server */
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
/* Parsers */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
/* Routers */
const forumRouter = require('../Routes/forumRouter.js')
const userRouter = require('../Routes/userRouter.js')
const apiRouter = require('../Routes/apiRouter.js')
/* Controllers */
const categoriesController =  require('./Controllers/categoriesController.js')



/* ---------------------------------------------------- ROUTERS ---------------------------------------------------- */
app.use('/api/user', userRouter)
app.use('/api/forum', forumRouter)
app.use('/api', apiRouter)



/* ---------------------------------------------------- ROUTES ---------------------------------------------------- */
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/categories', categoriesController.getCategories, (req, res) => {
    res.status(200).json({topCategories : res.locals.topCategories})
})



/* ---------------------------------------------------- ERROR HANDLERS ---------------------------------------------------- */
app.use('*', (req, res, err, next) => {
    console.log('err / catch all', err);
    res.status(404);
})

app.use((err, req, res, next) => {
    console.log('global', err);
    res.status(500).send('Internal Server Error');
})
