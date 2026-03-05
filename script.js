document.querySelector("#search").addEventListener("click",getCharacter);

function getCharacter(e) {
    const name = document.querySelector("#charName").value;

    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response)=>response.json())
    .then((data)=>{
        const nameH2 = document.querySelector("#displayCharName");
        const hairP = document.querySelector("#displayHairColor");
        const heightP = document.querySelector("#displayHeight");
        const massP = document.querySelector("displayMass");

        nameH2.textContent = data.results[0].name;
        hairP.textContent = `Hair Color: ${data.results[0].hair_color}`;
        heightP.textContent = `Height: ${data.results[0].height}`;
        massP.textContent = `Mass: ${data.results[0].mass}`;
    })

    .catch((err)=>{
        console.log("Character not found",err);
    })

    e.preventDefault()
}