const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const personSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true, 
    required: true
  },
  password: {
    required: true,
    type: String
  }
})

personSchema.pre('save', async function (next) {
  const person = this;
  if(!person.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedpassword = await bcrypt.hash(person.password, salt);
    person.password = hashedpassword;
    next();
  } catch (err) {
    return next(err);
  }
})

personSchema.methods.comparePassword = async function(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    throw new Error('Password comparison failed');
  }
}

const Person = mongoose.model('Person', personSchema);
module.exports = Person;