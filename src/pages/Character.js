import getHash from '../utils/getHash';
import getData from '../utils/getData';
const Character = async () => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="characters__inner">
            <article class="character__card">
                <img src="${character.image}" alt="${character.name}"/>
                <h2>${character.name}</h2>
            </article>
            <article class="character__card">
                <p>Episodes: <span>${character.episode.length}</span></p>
                <p>Status: <span>${character.status}</span></p>
                <p>Species: <span>${character.species}</span></p>
                <p>Gender: <span>${character.gender}</span></p>
                <p>Origin: <span>${character.origin.name}</span></p>
                <p>Last Location: <span>${character.location.name}</span></p>
            </article>
        </div>
    `;
    return view;
}

export default Character;