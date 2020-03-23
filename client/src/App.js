import React, { useState } from 'react';
import {Route, Link, Switch} from "react-router-dom";
import MovieList from "./Movies/MovieList";
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
console.log(savedList);
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path="/movies/:itemID"><Movie item={savedList}/></Route>
          <Route path="/"><MovieList item={savedList}/></Route>
        </Switch>
       
      </div>
    </div>
  );
};

export default App;
