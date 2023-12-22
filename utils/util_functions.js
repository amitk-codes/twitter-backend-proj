const _ = require("lodash")

function omitPasswordKey(dataObj){
  return _.omit(JSON.parse(JSON.stringify(dataObj)), ['password'])
}


module.exports.omitPasswordKey = omitPasswordKey