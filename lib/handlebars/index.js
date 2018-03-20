const _   = require('lodash');
const hbs = require('hbs');

const generalHelpers = require('./generalHelpers')

console.log(generalHelpers);
// registering general helpers

for (let i in generalHelpers){
  hbs.registerHelper(_.findKey(generalHelpers, i), i);
}

module.exports = hbs;
