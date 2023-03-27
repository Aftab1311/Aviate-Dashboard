import React from 'react'
import styles from '../styles/JobsPortalHeader.module.css'

const JobsPortalHeader = () => {
  return (
   <div className={styles.container}>
      <h1>JobsPortal</h1>
      <div>
        <button className={styles.login}>Login</button>
        <button className={styles.postjob}>Post a job</button>
      </div>
   </div>
  )
}

export default JobsPortalHeader