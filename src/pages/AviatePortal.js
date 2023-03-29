import Aviatesidebar from "../Components/AviateSidebar";
import React from "react";
import AviateNav from "../Components/AviateNav";
import AviateDashboard from "@/Components/AviateDashboard";

const AviatePortal = () => {
  return (
    <>
      <AviateNav />
      <Aviatesidebar />
      <AviateDashboard/>
    </>
  );
};

export default AviatePortal;
