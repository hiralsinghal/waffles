document.getElementById("search").addEventListener("click", getCharacter);

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getCharacter() {
    const name = document.getElementById("searchCharacter").value;
    const characterNameLC = lowerCaseName(name);

    fetch(`https://rickandmortyapi.com/api/character/?name=${characterNameLC}`)
    .then((response)=>response.json())
    .then((data) => {
        const characterNameH2 = document.getElementById("characterName");

        characterNameH2.textContent = data.results[0].name;
    })
    .catch((err) => {
        console.log("Character not found", err)
    })
}