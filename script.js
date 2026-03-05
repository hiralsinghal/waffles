document.querySelector("#search").addEventListener("click",getCharacter);

function getCharacter(e) {
    const name = document.querySelector("#charName").value;

    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then((response)=>response.json())
    .then((data)=>{
        const nameH2 = document.querySelector("#displayCharName");
        const hairP = document.querySelector("#displayHairColor");
        const heightP = document.querySelector("#displayHeight");
        const massP = document.querySelector("#displayMass");
        const eyeP = document.querySelector("#displayEyeColor");
        const yearP = document.querySelector("#displayBirthYear");
        const genderP = document.querySelector("#displayGender");
        const homeworldP = document.querySelector("#displayHomeworld");        

        nameH2.textContent = data.results[0].name;
        hairP.textContent = `Hair Color: ${data.results[0].hair_color}`;
        heightP.textContent = `Height: ${data.results[0].height}`;
        massP.textContent = `Mass: ${data.results[0].mass}`;
        eyeP.textContent = `Eye Color: ${data.results[0].eye_color}`;
        yearP.textContent = `Birth Year: ${data.results[0].birth_year}`;
        genderP.textContent = `Gender: ${data.results[0].gender}`;
        
        fetch(data.results[0].homeworld)
        .then((response)=>response.json())
        .then((planetData)=>{
            homeworldP.textContent = `Homeworld: ${planetData.results[0].homeworld}`;
        })
        
    })

    .catch((err)=>{
        console.log("Character not found",err);
    })

    e.preventDefault()
}