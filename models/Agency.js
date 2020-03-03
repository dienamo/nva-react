const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agencySchema = new Schema ([{
  name : {type : String , require: true},
  address : {type : String , required: true},
  latlng : {type : Array, required : true },
}]);

const Agency = mongoose.model('Agency' , agencySchema);

module.exports = Agency