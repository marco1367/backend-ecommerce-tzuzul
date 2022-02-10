const server = require('./src/app');
const {conn} = require('./src/db.js');
const {Products} = require('./src/db');
const {
    API_PORT,
} = process.env;


// Syncing all the models at once.
conn.sync({ force: true })
    .then(async () => {
        console.log('sincroniza');

        const all_products = [
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 2',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
            {
                name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
                image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
                price: 240,
            },
        ]

        Products.bulkCreate(all_products).then(console.log('Carga de datos correcta'));
    
        server.listen(API_PORT, () => {
            console.log(`the server has listen port ${API_PORT}`);
        });
    })