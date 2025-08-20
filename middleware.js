const {listingSchema} = require("./schema.js");
const {reviewSchema} = require("./schema.js");
const Listing = require("./models/listing");
const Review = require("./models/review");

const ExpressError = require("./utils/ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in");
    return res.redirect("/login");
  }
  next();
};
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
module.exports.isOwner = async (req,res,next)=>{
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing.owner._id.equals(res.locals.currUser._id)){
    req.flash("error", "you are not owner of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
}
module.exports.validateListing = (req,res,next)=>{
  const {error} = listingSchema.validate(req.body);
  if(error){
      let errMsg = error.details.map((el)=>el.message).join(",");
      throw new ExpressError(404, errMsg);
  } else{
      next();
  }
}
module.exports.validateReview = (req,res,next)=>{
  const {error} = reviewSchema.validate(req.body);
  if(error){
      let errMsg = error.details.map((el)=>el.message).join(",");
      throw new ExpressError(404, errMsg);
  } else{
      next();
  }
}
module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId, id } = req.params;

  const review = await Review.findById(reviewId);

  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to delete this review.");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
// module.exports.isReviewAuthor = async (req,res,next)=>{
//   let {reviewId, id} = req.params;
//   const review = await Review.findById(reviewId);
//   if(!review.author.equals(res.locals.currUser._id)){
//     req.flash("error", "you have not permission to delete");
//     return res.redirect(`/listings/${id}`);
//   }
//   next();
// }