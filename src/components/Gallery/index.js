import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/commercial/0.jpg";

function Gallery() {
  const currentCategory = {
    name: "commercial",
    description: "Lorem ipsum",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div>
        <img src={photo} />
      </div>
    </section>
  );
}

export default Gallery;
