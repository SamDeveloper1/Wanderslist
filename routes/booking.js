const express = require("express");
const router = express.Router({mergeParams: true});
const Razorpay = require("razorpay");
const {isLoggedIn} = require("../middleware");
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
router.post("/create-order", isLoggedIn, async (req, res) => {
  try {
    console.log("Booking route hit");
    console.log("Body:", req.body);
    console.log("Key ID:", process.env.RAZORPAY_KEY_ID);
    
    const { nights, amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };
    console.log("Creating order with options:", options);
    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);
    res.json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.log("Razorpay Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});
router.post("/payment-success", isLoggedIn, (req,res)=>{
req.flash("success", "Booking confirmed! Payment successful 🎉");
res.redirect(`/listings/${req.params.id}`);
});

module.exports= router;