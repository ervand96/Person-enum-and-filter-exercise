import express from 'express'
import persons from './persons.js'

const app = express()
const PORT = process.env.PORT = 5502

console.log(persons);
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendStatus(200)
})
app.get('/persons', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(persons))
})

app.listen(5502, () => {
    console.log(`Server For ${PORT}`);
})