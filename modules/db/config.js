console.log('Writting config file');

const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
  .options({
    d: {
      demand: true,
      alias: 'db',
      describe: 'Database URL',
      string: true
    },
    u: {
      demand: false,
      alias: 'username',
      describe: 'database-user',
      string: true
    },
    p: {
      demand: false,
      alias: 'password',
      describe: 'database password',
      string: true
    }
  })
  .help().argv;

const config = {
  user:argv.username || process.env.USER,
  password:argv.password,
  database:argv.db
};

fs.writeFile('./config-files/db-config.json', JSON.stringify(config, null, 4), (err) => {
  if(err){
    console.log(err);
    return false;
  }
})
