import express from 'express'
import mongoose from "mongoose"
import bodyParse from 'express'
import dotenv from 'dotenv'

import { addMovie, getMovies, get_Movies_Id, Update_Movie, Delete_Movie } from './Controllers/movie.js'

const app = express()
dotenv.config()

app.use(bodyParse.json())
const port = 3000

mongoose.connect(process.env.MONGO_URL, {

}).then((msg) => console.log('connected successfully'))
    .catch((err) => console.log(err.message))


//getting movies
app.get("/movies", getMovies)

//getting movies by id
app.get("/movies/:id", get_Movies_Id)

//Updating movies by id
app.put("/movies/:id", Update_Movie)

//movie add (POST)
app.post("/movies/add", addMovie)

//movie Delete
app.delete('/movies/:id', Delete_Movie)

app.listen(port, () => {
    console.log(`LISTENING on port ${port}`)
})
