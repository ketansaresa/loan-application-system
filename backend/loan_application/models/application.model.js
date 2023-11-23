import mongoose from 'mongoose';

// Define a Mongoose schema for your application data
const applicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  businessName: {
    type: String
  },
  taxId: {
    type: Number
  },
  yearEstablished: {
    type: Number
  },
  amountRequested: {
    type: Number
  },
  amountApproved: Number,
  purpose: String,
  preAssessment: Number,
  submittedAt: { type: Date, default: Date.now },
  isApproved: {
    type: Boolean,
    default: false
  }
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
