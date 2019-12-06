const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReferralSchema = new Schema({
    customer_id: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    refrerral_id: {type: String, required: true},
    payback: {type: Number, required: true},
    isAmbassador: {type: Boolean, required: true},
    joiningDate: {type: Date, required: true},
    lastUpdated:{type: Date, required: true, default: Date.now}
});



// Export the model
module.exports = mongoose.model('Referral', ReferralSchema);