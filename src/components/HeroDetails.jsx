import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneHero } from "../slices/heroesSlice";
import { useParams } from "react-router-dom";

const Hero = () => {
  const dispatch = useDispatch();
  const { hero, status, error } = useSelector((state) => state.heroes);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneHero(id));
  }, [dispatch, id]);


  return (
    <div>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "rejected" && <div>{error}</div>}
      {status === "resolved" && hero && (
        <div>
          <img alt={hero.name} src={hero.image} />
          <p>{hero.name}</p>
          <p>{hero.status}</p>
          <p>{hero.species}</p>
        </div>
      )}
    </div>
  );
};

export default Hero;