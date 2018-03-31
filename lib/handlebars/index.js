const _   = require('lodash');
const hbs = require('hbs');

const register = (module) => {
  Object.keys(module).forEach(function(key){
    console.log("Registering:", key, "helper:", typeof module[key])
    hbs.registerHelper(key, module[key]);
  });
}

hbs.registerPartials(__dirname + '/../../views/partials');

register(require('./generalHelpers'));
console.log('generalHelpers registered');
register(require('./userHelpers'));
console.log('userHelpers registered');

module.exports = hbs;
