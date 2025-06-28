

function sendapi() {
  const src = source.value;
  const dest = destination.value;
  fetch("http://localhost:8000/api1", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: src, destination: dest })
  })
      .then(res => {
    if (!res.ok) throw new Error("Server returned HTML/error");
    return res.json();
  })  // Return the parsed JSON
    .then(data => {
      console.log(data)

      //for distance
      const distance = data.api3data.routes[0].distance
      const km_distance = (distance / 1000).toFixed(1)
      console.log(km_distance, "distance ")
      let distance_innertext = document.getElementById("distance").innerText = km_distance+"KM";
      const time= data.api3data.routes[0].duration
      const time_hour=(time/3600).toFixed(2)
       let time_innertext = document.getElementById("time").innerText = time_hour+"hrs";



       //display name of selected source and destination
       let name1 = data.data1[0].display_name
       let sourcename_innertext=document.getElementById('source_name').innerText=name1

        let name2 = data.data2[0].display_name
        let destinationname_innertext=document.getElementById('destination_name').innerText=name2
    })
    
    .catch(error => {
      console.error("Error:", error);
    });
}

let button1 = document.getElementById("button1")
button1.addEventListener('click', sendapi)

//loader

let loader = document.getElementById('loader')
button1.addEventListener("click", () => {
  loader.style.display = "flex"
  
  setTimeout(() => {
    loader.style.display = "none"
    document.getElementById('source').value=""
    document.getElementById('destination').value=""
  }, 2000)
}
)

