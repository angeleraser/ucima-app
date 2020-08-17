import React from "react";
import "../../../css/Main/Contact.css";
import { socialNetworks } from "../../../data";
const Contact = () => {
  return (
    <main className="main-content contact">
      <section className="contact-data">
        <ul className="contact-info">
          <h2>Información de Contacto</h2>
          <li>
            {" "}
            <h3>
              {" "}
              - U.C.I.M.A (Unidad de Cirugía de Invasión Mínima Avanzada).
            </h3>
          </li>
          <li>
            <h3> - Dr. Guiseppe A. Coiro.</h3>
          </li>
          <li>
            <h4 className="title phone-number">Números telefónicos:</h4>
            <p>(+58)4148714271.</p>
            <p>(+58)4265902809.</p>
          </li>
          <li>
            <h4 className="title email">Correo electrónico:</h4>
            <p>gcoiro@gmail.com.</p>
            <p>ucima2017@gmail.com.</p>
            <a className="contact-email-btn" href="mailto:gcoiro15@gmail.com">
              Enviar un correo
            </a>
          </li>
        </ul>
        <ul className="social-links">
          <h2>Redes Sociales</h2>
          {socialNetworks.map((network) => (
            <li key={network.network}>
              <a href={network.url} target="_blank" rel="noopener noreferrer">
                {network.network}
                <span>{network.icon}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <h2 className="location title">Ubicación</h2>
          <li>
            <p>
              Centro Clínico Universidad de Oriente. <br /> Piso 1, Consultorio
              09. <br />
              Ciudad Bolívar, Venezuela.
            </p>
          </li>
          <li>
            <iframe
              title="Ubicacion de la empresa"
              id="ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.685959157122!2d-63.54192132929875!3d8.13341880846893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dce871c9a329ce5%3A0x8458b31c01e2157f!2sCoorporacion%20Clinica%20Universitaria%20De%20Oriente!5e0!3m2!1ses-419!2sve!4v1597637575925!5m2!1ses-419!2sve"
              width="100%"
              height="450"
              frameBorder="0"
              style={{
                border: "0px",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"></iframe>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
