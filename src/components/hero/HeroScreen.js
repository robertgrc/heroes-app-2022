import React from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);

  return (
    <div>
      <h1>Hero Screen</h1>
      <p>{hero.superhero}</p>
    </div>
  );
};
