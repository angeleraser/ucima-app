import React from "react";
import Ocupations from "./Ocupations";
import AcademicAwards from "./AcademicAwards";
import Works from "./Works";
import { useHistory } from "react-router-dom";
const Personal = () => {
  const {location:{pathname}} = useHistory();
  console.log(pathname)
  return (
    <main className="main-content personal">
      <Ocupations />
      <AcademicAwards />
      <Works />
    </main>
  );
};

export default Personal;
