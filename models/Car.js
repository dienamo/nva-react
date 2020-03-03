const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const carSchema = new Schema({
  brand: {type : Schema.Types.ObjectId, ref: 'Brand'},
  model: {type: String , required: true},
  type: [{type : Schema.Types.ObjectId, ref: 'Type'}],
  numberOfSeats : {type: Number , required: true},
  numberOfDoors : {type: Number , required: true},
  transmission : {type : String, enum: ['automatique', 'manuelle'] , required: true},
  airConditionner : {type: Boolean , required: true},
  mainImgUrl: {type: String , required: true},
  images: [{type: String}],
  available : {type: Boolean , required: true},
  agency : {type: String, enum:['Mermoz' , 'Saly'] , required: true},
  feesPerDay:{type: Number , required: true},
  numberPlate: {type: String , required: true},
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;