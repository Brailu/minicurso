const imagem = document.querySelector('img');
const button = document.querySelector('#button');
const name_character = document.querySelector('#name');
const species = document.querySelector('#species');
const is_alive = document.querySelector('#is_alive');

generation_random_value = () => {
    return Math.floor(Math.random() * 671);
}

get_character = () => {
    let random_value = generation_random_value();

    return fetch(`https://rickandmortyapi.com/api/character/${random_value}`, {
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

