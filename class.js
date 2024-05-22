const films = [
    { title: 'Jaws', year: 1975, genre: 'Drama', rating: 8, type: 'movie' },
    { title: 'Breaking Bad', year: 2008, genre: 'Drama', rating: 9.5, type: 'tv', seasons: 5 },
    { title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, type: 'movie' },
    { title: 'Stranger Things', year: 2016, genre: 'Horror', rating: 8.7, type: 'tv', seasons: 3 },
    { title: 'The Godfather', year: 1972, genre: 'Crime', rating: 9.2, type: 'movie' },
    { title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, type: 'movie' },
    { title: 'Friends', year: 1994, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 10 },
    { title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9, type: 'movie' },
    { title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7, type: 'movie' },
    { title: 'Game of Thrones', year: 2011, genre: 'Fantasy', rating: 9.3, type: 'tv', seasons: 8 },
    { title: 'The Shawshank Redemption', year: 1994, genre: 'Drama', rating: 9.3, type: 'movie' },
    { title: 'The Mandalorian', year: 2019, genre: 'Sci-Fi', rating: 8.8, type: 'tv', seasons: 2 },
    { title: 'Schindler\'s List', year: 1993, genre: 'Biography', rating: 8.9, type: 'movie' },
    { title: 'Forrest Gump', year: 1994, genre: 'Drama', rating: 8.8, type: 'movie' },
    { title: 'The Sopranos', year: 1999, genre: 'Crime', rating: 9.2, type: 'tv', seasons: 6 },
    { title: 'The Office', year: 2005, genre: 'Comedy', rating: 8.9, type: 'tv', seasons: 9 },
    { title: 'Avatar', year: 2009, genre: 'Action', rating: 7.8, type: 'movie' },
    { title: 'Seinfeld', year: 1989, genre: 'Comedy', rating: 8.8, type: 'tv', seasons: 9 },
    { title: 'The Avengers', year: 2012, genre: 'Action', rating: 8.0, type: 'movie' },
    { title: 'Lost', year: 2004, genre: 'Adventure', rating: 8.3, type: 'tv', seasons: 6 },
    { title: 'The Lion King', year: 1994, genre: 'Animation', rating: 8.5, type: 'movie' },
    { title: 'Gladiator', year: 2000, genre: 'Action', rating: 8.5, type: 'movie' }
  ];

class Movie {
    constructor(title, year, genre, rating, type) {
      this.title = title;
      this.year = year;
      this.genre = genre;
      this.rating = rating;
      this.type = type;
    }
  
    toString() {
      return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
    }
  }
  
  class TvSerie extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
      super(title, year, genre, rating, type);
      this.seasons = seasons;
    }
  
    toString() {
      return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
    }
  }
  
  // Creare un nuovo array con le istanze di Movie o TvSerie
  const filmInstances = films.map(film => {
    if (film.type === 'movie') {
      return new Movie(film.title, film.year, film.genre, film.rating, film.type);
    } else {
      return new TvSerie(film.title, film.year, film.genre, film.rating, film.type, film.seasons);
    }
  });
   console.log(filmInstances);
  
  // Funzione per calcolare la media dei voti per un determinato genere
  function averageRatingByGenre(filmList, genre) {
    const filteredFilms = filmList.filter(film => film.genre === genre);
    const totalRating = filteredFilms.reduce((sum, film) => sum + film.rating, 0);
    return totalRating / filteredFilms.length;
  }
  const genreToFilter = 'Drama';
  
  const avgRating = averageRatingByGenre(filmInstances, genreToFilter);
  console.log(`La media dei voti per il genere ${genreToFilter} è: ${avgRating}`);

  // Funzione per ottenere tutti i generi senza ripetizioni
  function getAllGenres(filmList) {
    const genres = [];
    filmList.forEach((item) => {
        if (!genres.includes(item.genre)) {
            genres.push(item.genre);
        }
    });
    return genres;
  }

  const allGenres = getAllGenres(filmInstances);
  console.log('Tutti i generi:', allGenres);
  
  // Funzione per filtrare i film per genere e ottenere la lista di toString()
  function filterFilmsByGenre(filmList, genre) {
    return filmList
      .filter(film => film.genre === genre)
      .map(film => film.toString());
  }

  const filteredFilms = filterFilmsByGenre(filmInstances, genreToFilter);
  console.log(`Film di genere ${genreToFilter}:`);
  filteredFilms.forEach(filmStr => console.log(filmStr));
  