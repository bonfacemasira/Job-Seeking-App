import React, { useEffect, useState, useMemo } from "react";
import Table from "../components/table/Table";

function JobSeekers() {
  //fetch data from backend give it a variable of data and columns and pass it to tables
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("http://127.0.0.1:3000/job_seekers").then((r) => {
      if (r.ok) {
        r.json().then((jobSeeker) => setJobSeekers(jobSeeker));
      }
    });
  }, []);
  console.log("jobseeker", jobSeekers);
  const jobSeekersData = useMemo(() => [...jobSeekers], [jobSeekers]);
  console.log("jobSeekersData", jobSeekersData);
  const jobSeekersColumns = useMemo(
    () =>
      jobSeekers[0]
        ? Object.keys(jobSeekers[0])
            .filter(
              (key) =>
                key !== "passport_url" &&
                key !== "image_url" &&
                key !== "certificate_url" &&
                key !== "cv_url"
            )
            // .filter((key) => key !== "image_url")
            // .filter((key) => key !== "certificate_url")
            // .filter((key) => key !== "cv_url")
            .map((key) => {
              return { Header: key, accessor: key };
            })
        : [],
    [jobSeekers]
  );
  console.log("jobSeekersColumns", jobSeekersColumns);

  return (
    <>
      <Table columns={jobSeekersColumns} data={jobSeekersData} />
    </>
  );
}
export default JobSeekers;
