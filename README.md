# 🧭 WandersList – Accommodation Platform

WandersList is a **full-stack project** built as part of a **Computer Networks project**, demonstrating how modern web applications use **network protocols, RESTful communication, and API-driven architecture** to deliver real-time, data-driven experiences.

Admins can **list, update, and delete** hostels, hotels, and PGs, while users can **view listings** with detailed information, images, and maps.

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | React.js | Component-based UI, asynchronous API communication |
| **Backend** | Node.js + Express.js | REST API server handling HTTP requests |
| **Database** | MongoDB (Atlas) | Cloud-hosted NoSQL database |
| **Authentication** | Passport.js | User authentication and session management |
| **Cloud Storage** | Cloudinary | Image storage and delivery via CDN |
| **Mapping API** | Mapbox | Location rendering and geocoding |
| **Networking** | HTTP / HTTPS | Communication between client, server, and external APIs |

---

## 🌐 Networking Overview

WandersList is designed to **highlight how computer networks enable full-stack communication** between clients, servers, and external services.

### 🧩 RESTful API Communication
The app follows **REST architecture**, using standard HTTP methods for CRUD operations:

| Method | Endpoint | Description |
|---------|-----------|-------------|
| **GET** | `/api/listings` | Fetch all listings |
| **GET** | `/api/listings/:id` | Fetch a single listing by ID |
| **POST** | `/api/listings` | Create a new listing *(admin only)* |
| **PUT** | `/api/listings/:id` | Update an existing listing *(admin only)* |
| **DELETE** | `/api/listings/:id` | Delete a listing *(admin only)* |

Each operation demonstrates a **specific HTTP request–response cycle**, encapsulating how data flows across the network.

### 🔐 Secure Data Transmission
- Uses **HTTPS** to ensure encrypted communication between client and server.
- Implements **Passport.js** for authentication, managing sessions securely.
- Credentials and tokens are exchanged using **HTTP headers** and **cookies**.

### 🌍 External Network Services
- **Cloudinary API:** Handles image uploads via `POST` requests and serves optimized images via `GET` requests through CDN.
- **Mapbox API:** Fetches and renders geolocation data, consuming external REST endpoints.
- Demonstrates **inter-network communication** between multiple APIs.

### ⚡ Asynchronous Networking
- The React client uses **Axios / Fetch** to make **AJAX requests**.
- Non-blocking I/O in Node.js ensures scalable and efficient request handling.

### 📡 Network Response Codes
Standard HTTP status codes are implemented:
- `200 OK` → Request successful  
- `201 Created` → Resource successfully created  
- `400 Bad Request` → Invalid client input  
- `401 Unauthorized` → Authentication required  
- `404 Not Found` → Resource not found  
- `500 Internal Server Error` → Server-side error

---

## 🧠 System Architecture

```plaintext
[ React Client ]
     |
     |  HTTP/HTTPS Requests (GET, POST, PUT, DELETE)
     v
[ Node.js + Express Server ]
     |
     |  MongoDB Queries (CRUD operations)
     v
[ MongoDB Atlas Cloud Database ]
     |
     |  Image & Map Data via APIs
     v
[ Cloudinary + Mapbox Services ]
