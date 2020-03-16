const index= require("./index")

const buildMarker=(type,location)=>{

    if(type==="hotel"){
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        return new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);

    }else if(type==="resturant"){
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        return new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);

    }else if(type==="activity"){
        const markerDomEl = document.createElement("div"); // Create a new, detached DIV
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
        return new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);
    }


    //  return new mapboxgl.Marker(markerDomEl).setLngLat(location).addTo(map);
}
module.exports = buildMarker

