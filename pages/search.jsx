/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import Navigation from "../components/bottomnNav";
import Navbar from "../components/nav";
import {searchGIF} from "../fetchAPI";
const Search = () => {
  const [gif, setGif] = useState([]);
  const [cari, setCari] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    searchGIF(cari).then((datas) => setGif(datas.data));
  };
  return (
    <>
      <Navbar position="fixed-top">
        <form onSubmit={handleClick} className="d-flex m-auto">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={(e) => setCari(e.target.value)}
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </Navbar>
      <div className="container-fluid mt-5">
        <div className="row">
          {gif.map((res) => {
            return (
              <div key={res.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-2">
                <div  className="card">
                  <img className="card-img-top" src={res.images.original.url} />
                  <div className="card-body">
                    <div className="h5">{res.title}</div>
                    <div className="p">{res.username}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Navigation />
    </>
  );
};
export default Search;
