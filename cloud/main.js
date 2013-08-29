/* main.js
 * All calls here are publicly exposed as JSON REST API endpoints, they can be called via the url: https://<host>/cloud/<func_name>.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/
exports.echo = function(params, callback){
  var word = params.word;
  return callback(null, {"echo": word});
};