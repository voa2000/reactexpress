const express = require('express');
const app = express();

app.get('/api/mavelMovies', (req, res) => {
    const mavelMovies = [
        {id: 1, movieName : 'Avengers-Endgame', year: 2019},
        {id: 2, movieName : 'Captain Mavel', year: 2019},
        {id: 3, movieName : 'Thor', year: 2011},
        {id: 4, movieName : 'Avengers Infinity War', year: 2019},
        {id: 5, movieName : 'Iron Man', year: 2008},
        {id: 6, movieName : 'Thor The Dark World', year: 2013},
        {id: 7, movieName : 'Captain America: The first Avenger', year: 2011},
        {id: 8, movieName : 'Avengers: Age of Ultron', year: 2015}
    ];
    res.json(mavelMovies);
});
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
