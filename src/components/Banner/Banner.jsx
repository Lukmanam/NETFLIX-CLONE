import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY } from "../../constants/constants";
import { imageUrl } from "../../constants/constants";
function Banner() {
  const [movie,setMovie]=useState() 
  const num=Math.round(Math.random()*10)
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[num]);
        console.log(num)
        setMovie(response.data.results[num])
      });
  }, []);
  return (
    
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}} className="banner">

      <div className="content">
        <h1 className="title">{movie ? movie.name || movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="buttons">Play</button>
          <button className="buttons">My List</button>
        </div>
        <h1 className="description">
        {movie ? movie.overview :""
}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
