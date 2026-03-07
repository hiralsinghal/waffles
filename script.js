document.querySelector("#search").addEventListener("click",getCharacter);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
        const filmsP = document.querySelector("#displayFilms") 
        const speciesP = document.querySelector("#displaySpecies")

        nameH2.textContent = data.results[0].name;
        hairP.innerHTML = `<b>Hair Color:</b> ${capitalizeFirstLetter(data.results[0].hair_color)}`;
        heightP.innerHTML = `<b>Height:</b> ${data.results[0].height}`;
        massP.innerHTML = `<b>Mass:</b> ${data.results[0].mass}`;
        eyeP.innerHTML = `<b>Eye Color:</b> ${capitalizeFirstLetter(data.results[0].eye_color)}`;
        yearP.innerHTML = `<b>Birth Year:</b> ${data.results[0].birth_year}`;
        genderP.innerHTML = `<b>Gender:</b> ${capitalizeFirstLetter(data.results[0].gender)}`;

        
        fetch(data.results[0].homeworld)
            .then((response)=>response.json())
            .then((planetData)=>{
                homeworldP.innerHTML = `<b>Homeworld:</b> ${planetData.name}`;
        });

        
        fetch(data.results[0].species[0])
            .then((response)=>response.json())
            .then((speciesData)=>{
                speciesP.innerHTML = `<b>Species:</b> ${speciesData.name}`
            });
        
        let titles = []

        for (let i=0; i<data.results[0].films.length; i++){
            fetch(data.results[0].films[i])
                .then((response)=>response.json())
                .then((film)=>{
                    titles.push(film.title)
                    filmsP.innerHTML = `<b>Films:</b> ${titles.join(", ")}`;
        })
        }
        
        document.querySelector(".characterBox").style.display="block";
    })

    .catch((err)=>{
        console.log("Character not found",err);
    })

    e.preventDefault()
}