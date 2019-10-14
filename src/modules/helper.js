var exports = (module.exports = {});
exports.parseRoute = function(url) {
  //get the url string from the request url
  return url.split('?') ? url.split('?')[0] : url;
};
