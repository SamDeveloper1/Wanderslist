const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../Controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,

    wrapAsync(listingController.newListing)
  );

// Create Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))
  .put(upload.single("listing[image]"),
   isOwner,validateListing, wrapAsync(listingController.updateListing));

// edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
