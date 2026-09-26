document.getElementById("search").addEventListener("click", getLocation);

document.getElementById("searchLocation").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getLocation();
    }
});

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getCharacterIDS(residents) {
    return residents.map((url) => url.split("/").pop());
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

        locationNameH3.textContent = data.results[0].name;
        locationTypeP.textContent = data.results[0].type;
        locationDimensionP.textContent = data.results[0].dimension;
        
        const residentsIDS = getCharacterIDS(data.results[0].residents);
        
        if (residentsIDS.length === 0) {
            const locationResidentsP = document.getElementById("locationResidents");
            locationResidentsP.textContent = "No residents found";
            return;
        }

        fetch(`https://rickandmortyapi.com/api/character/${residentsIDS.join(",")}`)
        .then((response) => response.json())
        .then((characterData) => {
            const locationResidentsP = document.getElementById("locationResidents")
            const residentsArray = Array.isArray(characterData) ? characterData : [characterData];
            locationResidentsP.textContent = residentsArray.map((character) => character.name).join(", ");
        })

        .catch((err) => {
            console.log("Residents not found", err);
        })
    })
    .catch((err) => {
        console.log("Location not found", err)
    })
}