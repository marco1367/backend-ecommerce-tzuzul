const server = require('./src/app');
const {conn} = require('./src/db.js');
const {Products, Rolle} = require('./src/db');
const {
    PORT,
} = process.env;
const {rolles} = require('./src/datos');

// Syncing all the models at once.
conn.sync({ force: true })
    .then(async () => {
        console.log('sincroniza');

        // const all_products = [
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 2',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        //     {
        //         name: 'producto 1 qsdasdasdasd asdasdasdasd adgdfgsdfg sdghsrgjheryj',
        //         image: 'https://http2.mlstatic.com/D_NQ_NP_983745-MLA41071258804_032020-O.webp',
        //         price: 240,
        //     },
        // ]

        // Products.bulkCreate(all_products).then(console.log('Carga de datos de PRODUCTOS correcta'));
        // Rolle.bulkCreate(rolles).then(console.log('Carga de datos ROLLES correcta'));
    
        server.listen(PORT, () => {
            console.log(`the server has listen port ${PORT}`);
        });
    })