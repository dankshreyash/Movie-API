import { Movies } from '../models/Movie.js'

//add movie (Create)
export const addMovie = async (req, res) => {

    let newMovie = await Movies.create(req.body)
    res.json({ message: "Movie added" })
    console.log(newMovie)
}

//Get movies (ALL)
export const getMovies = async (req, res) => {
    let movies = await Movies.find()
    res.json({ message: "fetching all movies", movies })
    console.log(movies)
}
//Get movies by id
export const get_Movies_Id = async (req, res) => {

    let id = req.params.id
    let movie_by_id = await Movies.findById(id)
    res.json({ message: "Fetching movie by id", movie_by_id })
    console.log(movie_by_id)
}
//Update movies by id
export const Update_Movie = async (req, res) => {
    let id = req.params.id
    let updatedMovie = req.body
    let movie = await Movies.findByIdAndUpdate(id, updatedMovie, { new: true })


    if (!movie) {
        return res.json({ message: "invalid id" })
    }


    res.json({ message: "movie Updated Successfully", movie })
    console.log(movie)

}
//Delete movies by id

export const Delete_Movie = async (req, res) => {
    let id = req.params.id
    let movie = await Movies.findByIdAndDelete(id)


    if (!movie) {
        return res.json({ message: "invalid id" })
    }


    res.json({ message: "Movie Deleted Successfully" })
    console.log('Movie Deleted Sucessfully')
}