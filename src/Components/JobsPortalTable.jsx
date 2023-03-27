import React from "react";
import { FiEye, FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../styles/JobsPortalTable.module.css";

const JobsPortalTable = () => {
  const tableEntries = [
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
    {
      title: "Software Engineer",
      jobType: "Full Time",
      postedDate: "2021-05-01",
      applicationDeadline: "Full Time",
    },
  ];
  return (
    <div className={styles.container_table}>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Job Type</th>
            <th>Posted Date</th>
            <th>Application Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableEntries.map((entry, index) => (
            <tr key={index}>
              <td className={styles.title}>{entry.title}</td>
              <td className={styles.content}>{entry.jobType}</td>
              <td className={styles.content}>{entry.postedDate}</td>
              <td className={styles.content}>{entry.applicationDeadline}</td>
              <td className={styles.content}>
                <div>
                  <span className={styles.view} onClick={() => handleView(key)}>
                    <FiEye />
                  </span>
                  <span className={styles.edit} onClick={() => handleEdit(key)}>
                    <FiEdit2 />
                  </span>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(key)}
                  >
                    <AiOutlineDelete />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsPortalTable;
