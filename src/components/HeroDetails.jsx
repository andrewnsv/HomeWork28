import { useSelector } from "react-redux";

const Hero = () => {
  const { hero, status, error } = useSelector((state) => state.heroes);

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