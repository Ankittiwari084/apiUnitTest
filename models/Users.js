const mongoose = require('mongoose');
const ajv = require('ajv');
const validation = require('../utils/schemaValidation');
const { createUserSchema } = require('../validationSchema/user');

const Schema = mongoose.Schema;

if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}


var newSchema = new Schema({
  
  'name': { type: String },
  'email': { type: String },
  'mobile': { type: String },
  'placementId': { type: String, ref:'userId' },
  'sponserId': { type: String, ref:'userId' },
  'placement': { type: String },
  'userId': { type: String },
  'password': { type: String },
  'status': { type: Boolean },
  'active': { type: Number },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

// this function excute before save data in database.
newSchema.pre('save', async function(req,res,next){
  this.updatedAt = Date.now();
  
  // validate data respect to schema. 
  const validationResponse = await validation.schemaValidation(createUserSchema,req.body);
  
  if(validationResponse !== null){
    throw validationResponse;
  }
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('Users', newSchema);
