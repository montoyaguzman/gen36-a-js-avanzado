const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto', PORT);
});

const songs = [
    { id: 1, name: 'Be the one', artist: 'Dua Lipa' },
    { id: 2, name: 'Don', artist: 'Miranda' },
    { id: 3, name: 'Afuera', artist: 'Caifanes' },
];

// hola dev.f
app.get('/hellow', (req, res) => {
    res.send('Hola dev.f desde expressJS!');
});

// getSongs GET
// getSongs (ejemplo query y request params)
// http://localhost:3000/songs?genre=rock&artist=metallica     ==>   queryParams: filtros de la info
// http://localhost:3000/songs/3/album/6                       ==>   requestParam: seleccionar un dato especifico
app.get('/songs/:id?', (req, res) => {
    console.log(req.query.genre);
    console.log(req.params.id);
    res.status(200).json(songs);
});

// createSongs POST (body y payload)
// body: { id: 0, name: '', artist: '' }
app.post('/songs', (req, res) => {
    const newSong = req.body;
    songs.push(newSong); // conexion BD
    res.status(201).send();
});

// PATCH
// Se utiliza para modificaciones parciales de los objetos
app.patch('/songs/:id', (req, res) => {

    const id = req.params.id;
    const newSong = req.body;
    const foundedPosition = songs.findIndex(element => element.id === parseInt(id));
    // for in, objectkeys
    songs[foundedPosition] = { ...songs[foundedPosition], ...newSong }
    res.status(200).json({ id, message: 'partial info edited' });

});

// PUT
// Se utiliza modificar los objetos completos
app.put('/songs/:id', (req, res) => {
    const id = req.params.id;
    const newSong = req.body;
    const foundedPosition = songs.findIndex(element => element.id === parseInt(id));
    songs[foundedPosition] = newSong;
    res.status(200).json({ id, message: 'all info edited' });
});

// DELETE
app.delete('/songs/:id', (req, res) => {
    const id = req.params.id;
    const foundedPosition = songs.findIndex(element => element.id === parseInt(id));
    songs.splice(foundedPosition, 1);
    res.status(200).json({ id });
});

