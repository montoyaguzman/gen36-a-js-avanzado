const URL = "http://localhost:3000/songs";
const ulElement = document.querySelector('ul');

const getSongs = async () => {
    let songs = [];
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        songs = await response.json();
        return songs;
    } catch (error) {
        console.error(error.message);
    }

};

const renderSongs = (songs) => {

    songs.forEach(song => {
        const liElement = document.createElement('li');
        liElement.innerHTML = `${song.name} - ${song.artist}`;
        ulElement.appendChild(liElement);
    });

};

const main = async () => {
    const songs = await getSongs();
    renderSongs(songs);
}

main();
