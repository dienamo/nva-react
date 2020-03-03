const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema ([{
  type : {type : String, enum: ['Luxe', '4x4' , 'Berline' , 'Monospace' , 'Coupé'] , required: true},
}]);

const Type = mongoose.model('Type' , typeSchema);

module.exports = Type