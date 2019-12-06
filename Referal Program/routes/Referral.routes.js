const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const referral_controller = require('../controllers/Referral.controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', referral_controller.test);
module.exports = router;

router.post('/addcust', referral_controller.addCustomer);

router.get('/:id', referral_controller.getCustomerById);

router.put('/:id/update', referral_controller.product_update);

router.delete('/:id/delete', referral_controller.product_delete);