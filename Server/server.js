/* ---------------------------------------------------- IMPORTS + MODULES + SERVER ---------------------------------------------------- */
const path = require('path');
const bodyparser = require('body-parser');
/* creating a server */
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
/* parsers */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
/* required routers */
const forumRouter = require('../Routes/forumRouter.js')
const userRouter = require('../Routes/userRouter.js')
/* required controllers */
const categoriesController =  require('./Controllers/categories.js')




/* ---------------------------------------------------- ROUTERS ---------------------------------------------------- */
//mounts the router modules on a path in the main server file
app.use('/user', userRouter)
app.use('/forum', forumRouter)




/* ---------------------------------------------------- ROUTES ---------------------------------------------------- */
/* statically serve everything in '(X)' folder on the route '/(X)' */
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

/* serve the `index.html` file on the route '/' */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
});

app.get('/categories', categoriesController.getCategories, (req, res) => {
    res.status(200).json({topCategories : res.locals.topCategories})
})




/* ---------------------------------------------------- ERROR HANDLERS ---------------------------------------------------- */
app.use('*', (req, res, err, next) => {
    console.log('err / catch all', err);
    //res.status(404);
})

app.use((err, req, res, next) => {
    console.log('global', err);
    res.status(500).send('Internal Server Error');
})
