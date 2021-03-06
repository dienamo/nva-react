const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  lastName: {type: String , required: true},
  username: {type: String , required: true},
  password: {type: String , required: true},
  rentals: [{type : Schema.Types.ObjectId, ref: 'Rental'}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;