import React from "react";
import "../../../css/Main/Establishment.css";
import { establishmentImages, establishmentImages2 } from "../../../data";
import { useState } from "react";
const Establishment = () => {
  const [loadMore, showImages] = useState(false);
  return (
    <section className="establishment">
      <h1>Nuestras instalaciones</h1>
      <div className="grid-img-wrapper-1 animate__animated animate__fadeIn">
        {establishmentImages.map((img, i) => (
          <img key={i} src={img.url} alt={img.name}></img>
        ))}
      </div>
      <button
        className="show-more-button"
        onClick={() => {
          showImages(!loadMore);
        }}>
        {!loadMore ? "Mostrar más" : "Ocultar"}
      </button>
      {loadMore && (
        <div
          className="grid-img-wrapper-2
        animate__animated animate__fadeIn ">
          {establishmentImages2.map((img, i) => (
            <img key={i} src={img.url} alt={img.name}></img>
          ))}
        </div>
      )}
    </section>
  );
};

export default Establishment;
