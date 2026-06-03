# 🏕️ TripNest – Travel Listing & Trip Planning Platform

TripNest is a **full-stack travel listing platform** where users can discover unique stays, book accommodations, and generate **AI-powered day-by-day trip itineraries** for any location — all in one place.
## 📸 Screenshots

![Home Page](/public/screenshots/home.png)
![Listing Details](/public/screenshots/listing.png)
![Booking Modal](/public/screenshots/booking.png)
![AI Itinerary](/public/screenshots/itinerary.png)

🌐 **Live Demo:** [tripnest.onrender.com](https://tripnest-9qg6.onrender.com)

---

## ✨ Features

- 🔐 **Authentication** — Secure signup/login with Passport.js and session management
- 🏠 **Listings** — Create, edit, delete and browse travel stays with image uploads
- 🗂️ **Category Filter** — Filter listings by type (Mountains, Farms, Camping, Boats etc.)
- 🔍 **Location Search** — Search listings by city, country or title using MongoDB regex
- 💳 **Razorpay Payments** — Book stays with real payment gateway integration (test mode)
- 🤖 **AI Itinerary Generator** — Generate personalized day-by-day trip plans using Google Gemini API
- 🗺️ **Mapbox Integration** — Interactive maps with geocoding for every listing
- ☁️ **Cloudinary CDN** — Optimized image storage and delivery
- 📱 **Fully Responsive** — Mobile-first design using Bootstrap 5

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | EJS, Bootstrap 5, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Authentication** | Passport.js, express-session |
| **Payments** | Razorpay |
| **AI** | Google Gemini API |
| **Maps** | Mapbox GL JS |
| **Cloud Storage** | Cloudinary |
| **Deployment** | Render |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Mapbox account
- Razorpay account
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone https://github.com/SamDeveloper1/TripNest.git

# Navigate to project directory
cd TripNest

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in root directory:

```env
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

### Run Locally

```bash
node app.js
```

Open [http://localhost:PORT](http://localhost:PORT)

---
