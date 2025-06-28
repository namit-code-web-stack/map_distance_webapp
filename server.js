const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");




const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.post("/api1", (req, res) => {
  const source = req.body.source;
  const destination = req.body.destination
  const body = req.body;
  console.log("Body:", body);
  if (source && destination) {
    const api1 = `https://nominatim.openstreetmap.org/search?format=json&q=${source}`;
    const api2 = `https://nominatim.openstreetmap.org/search?format=json&q=${destination}`;
    Promise.all([fetch(api1), fetch(api2)])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        const source_latitude = data1[0].lat
        const source_longitude = data1[0].lon
       const  destination_latitude = data2[0].lat
       const destination_longitude = data2[0].lon

        const api3 = `https://router.project-osrm.org/route/v1/driving/${source_longitude},${source_latitude};${destination_longitude},${destination_latitude}?overview=full&geometries=geojson`

        fetch(api3)
          .then((res) => res.json() )
          .then((api3data) => {
             res.json({ data1, data2,api3data });
              console.log(api3data)
            })})
         
      .catch(error => {
        console.error("Error fetching coordinates:", error);
        res.status(500).json({ error: "Failed to fetch coordinates" });
      });
  }
  

});




app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
