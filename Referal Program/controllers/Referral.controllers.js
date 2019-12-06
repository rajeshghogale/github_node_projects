const Customer = require('../models/Referral.model');

const uuidv4 = require('uuid/v4');//generates random uuid

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.addCustomer = function (req, res) {
    let customer = new Customer(
        {
            customer_id: uuidv4(),
            email: req.body.email,
            refrerral_id:req.body.refrerral_id,
            payback:req.body.payback,
            isAmbassador:req.body.isAmbassador,
            joiningDate:Date.now(),
            lastUpdated:Date.now()
        }
    );

    customer.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.getCustomerById = function (req, res) {
    Product.findById(req.params.id, function (err, customer) {
        if (err) return next(err);
        res.send(customer);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};