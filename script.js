document.querySelector("#search").addEventListener("click",getCharacter);

function getCharacter(e) {
    const name = document.querySelector("#charName").value;

    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response)=>response.json())
    .then((data)=>{
        const nameH2 = document.querySelector("#displayCharName")

        nameH2.textContent = data.name
    })
}