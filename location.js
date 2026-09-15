document.getElementById("search").addEventListener("click", getLocation);

document.getElementById("searchLocation").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getLocation();
    }
});

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getLocation() {
    const name = document.getElementById("searchLocation").value;
    const locationNameLC = lowerCaseName(name);

    fetch(`https://rickandmortyapi.com/api/location/?title=${locationNameLC}`)
    .then((response) => response.json())
    .then((data) => {
        const locationNameH3 = document.getElementById("locationName");
        const locationTypeP = document.getElementById("locationType");
        const locationDimensionP = document.getElementById("locationDimension");
        const locationResidentsP = document.getElementById("locationResidents")

        locationNameH3.textContent = data.results[0].name;
        locationTypeP.textContent = data.results[0].type;
        locationDimensionP.textContent = data.results[0].dimension;
        locationResidentsP.textContent = data.results[0].residents;
    })
    .catch((err) => {
        console.log("Location not found", err)
    })
}