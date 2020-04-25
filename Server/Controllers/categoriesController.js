const fs = require('fs');
const path = require('path');
const categoriesController = {};

categoriesController.getCategories = (req, res, next) => {
    const { topCategories } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../assets/data/topCategories.json'), 'UTF-8'));
    if (!topCategories) {
      return next({
        log: 'categoryController.getCategories: ERROR: Error getting categories data from categories.json file',
        message: { err: 'Error occurred in categoryController.getCategories. Check server logs for more details.' },
      });
    };
    res.locals.topCategories = topCategories;
    return next();
  };

module.exports = categoriesController;