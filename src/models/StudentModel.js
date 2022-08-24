import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add first name'],
    trim: true,
    maxlength: [80, 'Last name cannot be more than 80 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Please add last name'],
    trim: true,
    maxlength: [80, 'Last name cannot be more than 80 characters']
  },
  DOB: {
    type: Date
  },
  email: {
    type: String,
    required: [true, 'Please add a contact email']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    suburb: String,
    state: String,
    postcode: Number,
    country: String
  },
  instruments: {
    type: [String],
    enum: ['drums', 'guitar', 'piano', 'voice']
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Student', studentSchema)
