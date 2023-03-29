import Link from "next/link";
import React from "react";
import styles from "../styles/JobsPortalHeader.module.css";

const JobsPortalHeader = () => {
  return (
    <div className={styles.container}>
      <h1>JobsPortal</h1>
      <div>
        <Link href={"/AviatePortal"}>
          <button className={styles.login}>Login</button>
        </Link>
        <button className={styles.postjob}>Post a job</button>
      </div>
    </div>
  );
};

export default JobsPortalHeader;
