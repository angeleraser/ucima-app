import React from "react";
import "../../../css/Main/Works.css";
import { LinkButton } from "../../BaseComponents/LinkButton";
const Works = () => {
  return (
    <section className="works">
      <h2>Trabajos realizados</h2>
      <ul className="works-list">
        <li>
          {" "}
          <p>
            Pediculosis - piodermitis y oxiurasis en los hogares de cuidado
            diario.
          </p>{" "}
          <p>Ciudad Bolívar</p>
        </li>
        <li>
          <p>Hemorragía digestiva superior. Revisión de 143 casos.</p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
        <li>
          <p>
            Lavado peritoneal diagnóstico con cinta reactiva, en trauma
            abdominal cerrado y abierto por arma blanca.
          </p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
        <li>
          <p>
            Incidencia de la patología quirúrgica de la glándula tiroidea,
            servicio de cirugía.
          </p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
        <li>
          <p>
            Estudio comparativo de la profilaxis antimicrobiana y
            antibioticoterapia convencional en pacientes con apendicitis aguda,
            en el servicio de cirugía.
          </p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
        <li>
          <p>
            Colecistectomía abierta vs colecistectomía laparoscópica, servicio
            de cirugía
          </p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
        <li>
          <p>
            Manejo de lesiones hepáticas en pacientes con traquma
            toraco-abdominal.
          </p>
          <p>Complejo Hospitalario Ruíz y Paez. Ciudad Bolívar.</p>
        </li>
      </ul>
      <LinkButton route='/' classes="cta-button" label="Contactar" />
    </section>
  );
};

export default Works;
