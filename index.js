const express = require('express');
const app = express();

const books = [
    {
        id: 1,
        name: "Harry Potter and the Sorcerer's Stone",
        image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg",
        price: 99000,
        stock: 100,
    },
    {
        id: 2,
        name: "Harry Potter and the Chamber of Secrets",
        image: "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781408855669.jpg",
        price: 61000,
        stock: 100,
    },
    {
        id: 3,
        name: "Harry Potter and the Prisoner of Azkaban",
        image: "https://prodimage.images-bn.com/pimages/9780439064873_p0_v1_s1200x630.jpg",
        price: 74000,
        stock: 100,
    },
    {
        id: 4,
        name: "Harry Potter and the Goblet of Fire",
        image: "https://m.media-amazon.com/images/I/81f7bXC-tTL._AC_UF1000,1000_QL80_.jpg",
        price: 96000,
        stock: 100,
    },
    {
        id: 5,
        name: "Harry Potter and the Order of the Phoenix",
        image: "https://static.wikia.nocookie.net/harrypotter/images/a/a3/Goblet_of_Fire_New_Cover.jpg",
        price: 56000,
        stock: 100,
    },
    {
        id: 6,
        name: "Harry Potter and the Half-Blood Prince",
        image: "https://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s1200x630.jpg",
        price: 66000,
        stock: 100,
    },
    {
        id: 7,
        name: "Harry Potter and the Deathly Hallows",
        image: "https://m.media-amazon.com/images/I/61sXBXmAWML._AC_UF1000,1000_QL80_.jpg",
        price: 76000,
        stock: 100,
    },
    {
        id: 8,
        name: "Harry Potter and the Cursed Child",
        image: "https://m.media-amazon.com/images/I/51V6zvaRjkL.jpg",
        price: 86000,
        stock: 100,
    },
]

// Habilitar CORS para permitir solicitudes desde cualquier origen (*).
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>API svargasc Potter</h1>');
})

app.get('/api/books', (req, res) => {
    res.json(books)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})