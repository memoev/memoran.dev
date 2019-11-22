const monk = require('monk');
const connectionString = 'localhost/memorandev';
var db = monk(connectionString);

module.exports = db;