const express = require('express') 
const cors = require('cors') 

const webServer = express()

webServer.use(cors())  // attaching middleware


const products = [ 
    {name: "P1", price: 10},
    {name: "P12", price: 150},
    {name: "P14", price: 160},
    {name: "P51", price: 120},
    {name: "P15", price: 120},
    {name: "P16", price: 160},
    {name: "P17", price: 610},
];

const books = [ 
    {title: "T1", author: " A1", price: 140},
    {title: "T21", author: " A51", price: 140},
    {title: "T31", author: " A31", price: 150},
    {title: "T13", author: " A17", price: 104},
    {title: "T15", author: " A41", price: 160},
]

const ques = [
    {state: "AAA", op1: "A1",op2: "A12",op3: "A561",op4: "A51", correctAnswer:1, marks: 5 },
    {state: "BB", op1: "A1",op2: "A12",op3: "A561",op4: "A51", correctAnswer:1, marks: 5 },
    {state: "CC", op1: "A1",op2: "A12",op3: "A561",op4: "A51", correctAnswer:1, marks: 5 },
    {state: "KK", op1: "A1",op2: "A12",op3: "A561",op4: "A51", correctAnswer:1, marks: 5 },
    {state: "DD", op1: "A1",op2: "A12",op3: "A561",op4: "A51", correctAnswer:1, marks: 5 },
]


webServer.get('/products', (req, res) => {
    res.json(products)
})
webServer.get('/books', (req, res) => {
    res.send(books)
})
webServer.get('/test', (req, res) => {
    res.send(ques)
})
webServer.get('/', (req, res) => {
    res.send("Hell0 in Home ")
})

webServer.listen(9001)
