
# map_distance_webapp
Map Distance Web App is a responsive full-stack application that calculates the best driving route between two locations using real-time map APIs.
It uses Nominatim API to convert location names into coordinates and OSRM API to determine the shortest route, total distance, and estimated travel time.
The frontend is built using HTML, CSS, and JavaScript, while the backend uses Node.js and Express.
Users can enter any city or place name as source and destination.
The app instantly displays route distance and duration using live data.
It's hosted on Render.com, allowing global access with a single link.
Mobile-first responsive design ensures usability on all devices.
Error handling is built-in for invalid inputs or API failures.


##  Live Demo

- 🔗 **Frontend URL**: [https://map-distance-webapp-2.onrender.com](https://map-distance-webapp-2.onrender.com)  
- 🔗 **Backend API URL**: [https://map-distance-webapp-2.onrender.com/api1](https://map-distance-webapp-2.onrender.com/api1)

> The backend is auto-pinged using GitHub Actions every 14 minutes to stay awake on Render's free tier.

---

##  Features

-  Real-time route, distance, and time calculations
-  Live geocoding and routing via Nominatim & OSRM
-  Responsive mobile-first UI
-  Fast, optimized API requests
-  Clear error handling for invalid locations or API issues
-  Lightweight and minimal dependencies
-  Hosted on Render (free global access)

---

##  Tech Stack

| Layer       | Tech Used                           |
|-------------|-------------------------------------|
| Frontend    | HTML, CSS, JavaScript               |
| Backend     | Node.js, Express                    |
| APIs        | Nominatim (OpenStreetMap), OSRM     |
| Hosting     | Render.com                          |
| Tools       | GitHub, node-fetch, npm             |

---

##  How It Works

1. **User Input**: Enter source and destination city/place names.
2. **Geocoding**: Backend converts names to coordinates using Nominatim.
3. **Routing**: OSRM API calculates optimal driving route, distance, and ETA.
4. **Display**: Frontend shows results instantly using clean visuals.

---

##  Folder Structure

map_distance_webapp/
├── index.html
├── style.css
├── script.js
├── server.js
├── package.json
├── .github/
│ └── workflows/
│ └── ping.yml 


**Namit Yadav**  
 namityadav5255@gmail.com  
 [GitHub - namit-code-web-stack](https://github.com/namit-code-web-stack)  