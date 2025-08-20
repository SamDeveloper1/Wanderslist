const express  = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../Controllers/reviews.js");
// Reviews
// Post Review route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));
 // Delete review route
 router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));
 module.exports = router;