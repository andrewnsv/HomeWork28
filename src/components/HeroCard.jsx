import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHeroes,
  fetchOneHero,
  nextHandler,
  prevHandler,
} from "../slices/heroesSlice";

const HeroCard = () => {
  const dispatch = useDispatch();
  const { listOfСharacter, infoPage, status, error, currentPage } = useSelector(
    (state) => state.heroes
  );

  const handleNext = () => {
    dispatch(nextHandler());
  };

  const handlePrev = () => {
    dispatch(prevHandler());
  };

  const handleClick = (id) => {
    dispatch(fetchOneHero(id));
  };

  useEffect(() => {
    dispatch(fetchHeroes(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className={"wrap"}>
      <div className={"hero-wrapper"}>
        {status === "loading" && <h3>Loading..</h3>}
        {status === "rejected" && <div>{error}</div>}
        {status === "resolved" &&
          listOfСharacter.map((item, index) => {
            return (
              <div className={"card-hero"} key={index}>
                <img alt={item.name} src={item.image}></img>
                <p>{item.name}</p>
                <p>{item.status}</p>
                <p>{item.species}</p>
                <Link to={`/heroes/hero/`}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="details-card"
                  >
                    Details
                  </button>
                </Link>
              </div>
            );
          })}
        <div className="btn-wrapper">
          <button disabled={currentPage === 1} onClick={handlePrev}>
            Prev
          </button>
          <button
            disabled={currentPage === infoPage?.pages}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
