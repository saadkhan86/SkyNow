---

# 🌦️ WeatherSphere - Full-Stack Weather Application

A modern, full-stack weather application built with the **MERN stack**. WeatherSphere delivers real-time weather conditions and forecasts through a clean, responsive interface, demonstrating robust integration of a React frontend with an Express.js backend.

---

## 📋 Table of Contents

- [Live Demo](#live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#️-installation--setup)
- [API Configuration](#-api-configuration)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)
- [License](#-license)

## 🚀 Live Demo

*   **Frontend (Hosted on Vercel):** [https://your-weather-app.vercel.app](https://your-weather-app.vercel.app)
*   **Backend API (Hosted on Render/Railway):** `https://your-weather-app-api.onrender.com`

*(Replace the above links with your actual deployment URLs)*

---

## ✨ Features

*   **Real-Time Weather Data:** Fetches and displays current weather conditions, including temperature, humidity, wind speed, and atmospheric pressure.
*   **5-Day Forecast:** Presents an intuitive multi-day weather outlook.
*   **Dynamic Search:** Find weather information for any city worldwide.
*   **Responsive Design:** A seamless experience across all devices, from desktop to mobile.
*   **Modern UI/UX:** A clean, user-friendly interface built with a modern component-based architecture.
*   **Secure Backend:** A robust Express.js server with CORS configuration and environment variable protection for API keys.
*   **Error Handling:** Comprehensive user feedback for invalid cities and API errors.

---

## 🛠️ Tech Stack

**Frontend:**
*   React.js
*   CSS3
*   Context API / Hooks for State Management

**Backend:**
*   Node.js
*   Express.js
*   CORS

**External Service:**
*   [OpenWeatherMap API](https://openweathermap.org/api)

**Development & Deployment:**
*   Git, GitHub
*   npm
*   Vercel (Frontend)
*   Render / Railway (Backend)

---

## 📁 Project Structure

```
weathersphere/
├── backend/                 # Express.js Server
│   ├── controllers/         # Route logic (e.g., weatherController.js)
│   ├── middleware/          # Custom middleware (e.g., errorHandler.js)
│   ├── config/              # Configuration files (e.g., for CORS)
│   ├── .env                 # Environment variables (API Key, PORT)
│   ├── package.json
│   └── server.js            # Application entry point
├── frontend/                # React.js Client
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components (e.g., SearchBar, WeatherCard)
│   │   ├── context/         # React Context for state management
│   │   ├── styles/          # CSS modules or global styles
│   │   ├── utils/           # Helper functions (e.g., API calls)
│   │   └── App.js
│   ├── package.json
│   └── .env                 # Frontend environment variables (e.g., API Base URL)
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally for development and testing.

#### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/weathersphere.git
cd weathersphere
```

#### 2. Set Up the Backend
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file and add your variables
echo "OPENWEATHER_API_KEY=your_api_key_here" >> .env
echo "PORT=5000" >> .env

# Start the development server
npm run dev
```
The backend API will run on `http://localhost:5000`.

#### 3. Set Up the Frontend
```bash
# Open a new terminal and navigate to the frontend directory
cd ../frontend

# Install dependencies
npm install

# (Optional) Create a .env file for the frontend API base URL
echo "REACT_APP_API_BASE_URL=http://localhost:5000/api" >> .env

# Start the React development server
npm start
```
The frontend application will open in your browser at `http://localhost:3000`.

---

## 🔑 API Configuration

This project uses the **OpenWeatherMap API**.
1.  Sign up for a free account at [https://openweathermap.org/api](https://openweathermap.org/api).
2.  Generate an API key.
3.  Add this key to your `backend/.env` file as `OPENWEATHER_API_KEY`.

---

## 📜 Available Scripts

**Backend (`/backend` directory):**
*   `npm start` - Runs the server in production mode.
*   `npm run dev` - Runs the server with Nodemon for development.

**Frontend (`/frontend` directory):**
*   `npm start` - Runs the app in development mode.
*   `npm run build` - Builds the app for production.
*   `npm test` - Launches the test runner.

---

## 🌐 Deployment

*   **Frontend:** The React application is deployed on **Vercel** for optimal performance and global CDN distribution.
*   **Backend:** The Express.js server is deployed on **Render** or **Railway**, which provides seamless Node.js hosting with integrated environment variable management.

Ensure all environment variables (e.g., `OPENWEATHER_API_KEY`, `REACT_APP_API_BASE_URL`) are correctly configured in your deployment platforms.

---

## 🚀 Future Enhancements

*   User authentication to save favorite locations.
*   Geolocation to fetch weather based on the user's current location.
*   Interactive charts for temperature and precipitation trends.
*   Weather alerts and notifications.
*   PWA (Progressive Web App) implementation for offline functionality.

---

## 👨‍💻 Author

**Saad Khan**

*   [![GitHub](https://img.shields.io/badge/GitHub-saadkhan86-black?style=flat&logo=github)](https://github.com/saadkhan86)
*   [![LinkedIn](https://img.shields.io/badge/LinkedIn-Saad_Khan-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/your-profile/)
*   [![Portfolio](https://img.shields.io/badge/Portfolio-saadtecz.wordpress.com-brightgreen?style=flat)](https://www.saadkhan.dev)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---
