import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const ResultCard = ({movie}) => {
    const {addMovieToWatchlist,watchlist,addMovieToWatched,watched}=useContext(GlobalContext);
    
    let storeMovie=watchlist.find(o=>o.id === movie.id);

    let storeMovieWatched=watched.find(o=> o.id === movie.id);

    const watchlistDisabled= storeMovie 
    ? true 
    :storeMovieWatched 
    ? true 
    :false;

    const watchDisabled = storeMovieWatched ? true : false;
    return (
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : `-`}
            </h4>
          </div>
          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to WatchList
            </button>

            <button
              className="btn"
              disabled={watchDisabled}
              onClick={() => addMovieToWatched (movie)}
            >
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    );
}
