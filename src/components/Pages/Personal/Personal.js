import React, { useContext, useEffect } from "react";
import Ocupations from "./Ocupations";
import AcademicAwards from "./AcademicAwards";
import Works from "./Works";
import { AppContext } from "../../App/AppContext";
const Personal = () => {
  const { setCurrentPage } = useContext(AppContext);
  useEffect(() => {
    setCurrentPage("/personal");
  });
  return (
    <main className="main-content personal">
      <Ocupations />
      <AcademicAwards />
      <Works />
    </main>
  );
};

export default Personal;
