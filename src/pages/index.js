import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import JobsPortal from "./JobsPortal";
import AviatePortal from "./AviatePortal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <JobsPortal />;
}
