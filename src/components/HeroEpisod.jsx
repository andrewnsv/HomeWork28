import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEpisodes,
  nextHandler,
  prevHandler,
} from "../slices/episodesSlice";

const HeroEpisod = () => {
  const dispatch = useDispatch();
  const { liftOfEpisodes, infoPage, status, error, currentPage } = useSelector(
    (state) => state.episodes
  );

  console.log(liftOfEpisodes);
  useEffect(() => {
    dispatch(fetchEpisodes(currentPage));
  }, [dispatch, currentPage]);

  const handleNext = () => {
    dispatch(nextHandler());
    dispatch(fetchEpisodes(currentPage + 1));
  };

  const handlePrev = () => {
    dispatch(prevHandler());
    dispatch(fetchEpisodes(currentPage - 1));
  };

  return (
    <div className={"episodes-wrapper"}>
      {status === "loading" && <h3>Loading..</h3>}
      {status === "rejected" && <div>{error}</div>}
      {status === "resolved" &&
        liftOfEpisodes.map((item, index) => {
          return (
            <div className={"item-episod"} key={index}>
              <div className="number-item">
                <p>{`${item.id}.`}</p>
              </div>
              <div className="info-item">
                <p>
                  <b>Name: </b>
                  {item.name}
                </p>
                <p>
                  <b>Date: </b>
                  {item.air_date}
                </p>
                <p>
                  <b>Episod: </b>
                  {item.episode}
                </p>
              </div>
            </div>
          );
        })}

      <div className="btn-wrapper">
        <button
          disabled={currentPage === 1}
          onClick={handlePrev}
        >
          prev
        </button>
        <button
          disabled={currentPage === infoPage?.pages}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default HeroEpisod;
