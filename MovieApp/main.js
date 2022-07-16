const main = document.getElementById("main");
const form = document.getElementById("form");
const seacrh = document.getElementById("search");

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// fetching Movies
getMovies(API_URL)

const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data)
}

const showMovies = (movies) => {
    main.innerHTML = ""

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie')
    })
}