const _ = require("lodash")
const JOI = require("joi")

function omitPasswordKey(dataObj){
  return _.omit(JSON.parse(JSON.stringify(dataObj)), ['password'])
}

function JoiObjectIdValidation(){
  return JOI.string().regex(/^[0-9a-fA-F]{24}$/, "MongoDB ObjectId")
}


module.exports.omitPasswordKey = omitPasswordKey
module.exports.JoiObjectIdValidation = JoiObjectIdValidation