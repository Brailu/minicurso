const imagem = document.querySelector('img');
const button = document.querySelector('#button');
const name_character = document.querySelector('#name');
const species = document.querySelector('#species');
const is_alive = document.querySelector('#is_alive');


get_character = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET', 
        headers: {
            Accpet: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then ((data) => {
        imagem.src = data.image; 
        imagem.alt = data.name;
        name_character.innerHTML = data.name;
        species.innerHTML = data.species;
        is_alive.innerHTML = data.status;

    });
}

button.onclick = get_character;

