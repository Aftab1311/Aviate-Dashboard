import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import JobsPortal from "./JobsPortal";
import AviatePortal from "./AviatePortal";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AviatePortal />
      {/* <JobsPortal /> */}
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<JobsPortal />} />
    //     <Route path="/login" element={<AviatePortal />} />
    //   </Routes>
    // </BrowserRouter>
  );
}
