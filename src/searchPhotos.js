import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    
    accessKey:"Your_access_key"
  });


export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query,1,20)
    .then(toJson)
    .then((json) => {
      setPics(json.results);
    });
    console.log("Submitting the Form")
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`"Search photos"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
  );
}
    
