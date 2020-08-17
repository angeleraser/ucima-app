import React from "react";
import "../../../css/Main/CompanyInfo.css";
import { LinkButton } from "../../BaseComponents/LinkButton";
const QuienesSomos = () => {
  return (
    <section className="company-info">
      <h1>¿Quiénes somos?</h1>
      <p>
        <strong>U.C.I.M.A</strong> (Unidad de Invasión Mínima Avanzada) es una
        empresa dedicada a la compra, venta y alquiler de instrumentos, equipos
        consumibles y suturas quirurgicas, de cirugía Laparoscópica en general,
        asi como importacion y exportacion de los mismos elementos además de
        todo lo relacionado con ese tipo de tecnología. Damos asesoría técnica y
        cursos de entrenamiento para nuevos cirujanos que quieran incursionar en
        en la cirugía mínimamente invasiva.
      </p>
      <LinkButton route="/contact" classes="cta-button" label="CONTACTAR" />
      <h2>Servicios</h2>
      <ul>
        <h3>Todo lo relacionado con Cirugía Laparoscópica:</h3>
        <li>Cirugías electivas - programadas y de emergencia.</li>
        <li>
          Cirugías hepáticas y vías biliares - colecistectomías resección de
          quistes y tumores hepáticos.
        </li>
        <li>Cirugía endocrina - tiroides, pancreas.</li>
        <li>
          Cirugía bariátrica y metabólica - bypass gastrico y manga gástrica.
        </li>
        <li>
          Cirugía de colon y recto - colectomías totales y parciales,
          hemorroides fístulas y fisuras anales.
        </li>
        <li>
          Cirugía ginecológicas - histerectomías por miomatosis uterina,
          patología ovárica de culaquier etiología.
        </li>
        <li>
          Cirugía de pared abdominal - hernias, eventraciones, tumores de partes
          bandas.
        </li>
      </ul>
    </section>
  );
};

export default QuienesSomos;
