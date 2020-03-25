import React from 'react';
import {Route, Link, useHistory} from "react-router-dom";
import {MovieList, MovieDetails} from "./MovieList";

function SavedList(props){ 
return(


  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div className="home-button"><Link to="/">Home</Link></div>
  </div>
);
    }
export default SavedList;
