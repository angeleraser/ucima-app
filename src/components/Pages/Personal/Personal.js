import React from "react";
import Ocupations from "./Ocupations";
import AcademicAwards from "./AcademicAwards";
import Works from "./Works";
const Personal = () => {
  return (
    <main className="main-content personal">
      <Ocupations />
      <AcademicAwards />
      <Works />
    </main>
  );
};

export default Personal;
