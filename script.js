document.getElementById("search").addEventListener("click", getCharacter);

document.getElementById("searchCharacter").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getCharacter();
    }
});

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getCharacter() {
    const name = document.getElementById("searchCharacter").value;
    const characterNameLC = lowerCaseName(name);

    fetch(`https://rickandmortyapi.com/api/character/?name=${characterNameLC}`)
    .then((response)=>response.json())
    .then((data) => {
        const characterNameH3 = document.getElementById("characterName");
        const characterStatusP = document.getElementById("characterStatus");
        const characterSpeciesP = document.getElementById("characterSpecies");
        const characterOriginP = document.getElementById("characterOrigin");
        const characterLocationP = document.getElementById("characterLocation");
        const characterImgImg = document.getElementById("characterImg");

        characterNameH3.textContent = data.results[0].name;
        characterStatusP.textContent = data.results[0].status;
        characterSpeciesP.textContent = data.results[0].species;
        characterOriginP.textContent = data.results[0].origin.name;
        characterLocationP.textContent = data.results[0].location.name;
        characterImgImg.src = data.results[0].image;
    })
    .catch((err) => {
        console.log("Character not found", err)
    })
}